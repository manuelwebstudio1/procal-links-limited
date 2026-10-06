const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
  console.error("Usage: node cut-logo.js <input> <output>");
  process.exit(1);
}

function isGreenPlate(r, g, b) {
  const avg = (r + g + b) / 3;
  const max = Math.max(r, g, b);
  return g >= r + 5 && g >= b && max < 100 && avg < 80;
}

function isWall(r, g, b) {
  const avg = (r + g + b) / 3;
  return r > 60 && r > g + 8 && g >= b - 4 && g < 140 && r < 210 && avg < 170 && b < 120 && r - g > 8;
}

function isLogoMetal(r, g, b) {
  const avg = (r + g + b) / 3;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const silver = avg > 130 && max - min < 55;
  const gold = r > 110 && g > 70 && r >= g - 8 && g > b + 18 && max > 140;
  return silver || gold;
}

function colorDist(a, b) {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

async function main() {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const pixels = Buffer.from(data);
  const visited = new Uint8Array(width * height);
  const queue = [];

  function idx(x, y) {
    return (y * width + x) * 4;
  }

  function push(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = y * width + x;
    if (visited[i]) return;
    visited[i] = 1;
    queue.push(x, y);
  }

  for (let x = 0; x < width; x++) {
    const top = idx(x, 0);
    const bot = idx(x, height - 1);
    if (isGreenPlate(pixels[top], pixels[top + 1], pixels[top + 2]) || isWall(pixels[top], pixels[top + 1], pixels[top + 2])) {
      push(x, 0);
    }
    if (isGreenPlate(pixels[bot], pixels[bot + 1], pixels[bot + 2]) || isWall(pixels[bot], pixels[bot + 1], pixels[bot + 2])) {
      push(x, height - 1);
    }
  }
  for (let y = 0; y < height; y++) {
    const left = idx(0, y);
    const right = idx(width - 1, y);
    if (isGreenPlate(pixels[left], pixels[left + 1], pixels[left + 2]) || isWall(pixels[left], pixels[left + 1], pixels[left + 2])) {
      push(0, y);
    }
    if (isGreenPlate(pixels[right], pixels[right + 1], pixels[right + 2]) || isWall(pixels[right], pixels[right + 1], pixels[right + 2])) {
      push(width - 1, y);
    }
  }

  while (queue.length) {
    const y = queue.pop();
    const x = queue.pop();
    const i = idx(x, y);
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    pixels[i] = 0;
    pixels[i + 1] = 0;
    pixels[i + 2] = 0;
    pixels[i + 3] = 0;

    const nbs = [x - 1, y, x + 1, y, x, y - 1, x, y + 1];
    for (let n = 0; n < nbs.length; n += 2) {
      const nx = nbs[n];
      const ny = nbs[n + 1];
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const ni = idx(nx, ny);
      const nr = pixels[ni];
      const ng = pixels[ni + 1];
      const nb = pixels[ni + 2];
      if (isGreenPlate(nr, ng, nb) || isWall(nr, ng, nb)) {
        push(nx, ny);
        continue;
      }
      const dist = colorDist([r, g, b], [nr, ng, nb]);
      const avg = (nr + ng + nb) / 3;
      if (isGreenPlate(r, g, b) && dist < 22 && avg < 70 && ng >= nr + 4) {
        push(nx, ny);
      }
    }
  }

  const copy = Buffer.from(pixels);
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = idx(x, y);
      if (copy[i + 3] === 0) continue;
      let trans = 0;
      for (let oy = -1; oy <= 1; oy++) {
        for (let ox = -1; ox <= 1; ox++) {
          if (copy[idx(x + ox, y + oy) + 3] < 16) trans++;
        }
      }
      if (trans >= 7) {
        pixels[i] = 0;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
        pixels[i + 3] = 0;
      }
    }
  }

  for (let x = width - 1; x >= Math.floor(width * 0.84); x--) {
    let metal = 0;
    let wall = 0;
    for (let y = 0; y < height; y++) {
      const i = idx(x, y);
      if (pixels[i + 3] < 20) continue;
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      if (isLogoMetal(r, g, b)) metal++;
      else if (isWall(r, g, b) || isGreenPlate(r, g, b)) wall++;
    }
    if (metal > 16 && metal >= wall) break;
    for (let y = 0; y < height; y++) {
      const i = idx(x, y);
      if (pixels[i + 3] === 0) continue;
      if (!isLogoMetal(pixels[i], pixels[i + 1], pixels[i + 2])) {
        pixels[i] = 0;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
        pixels[i + 3] = 0;
      }
    }
  }

  const minOpaque = 22;
  let minX = 0;
  let maxX = width - 1;
  let minY = 0;
  let maxY = height - 1;

  function colCount(x) {
    let n = 0;
    for (let y = 0; y < height; y++) if (pixels[idx(x, y) + 3] > 24) n++;
    return n;
  }
  function rowCount(y) {
    let n = 0;
    for (let x = 0; x < width; x++) if (pixels[idx(x, y) + 3] > 24) n++;
    return n;
  }

  while (minX < maxX && colCount(minX) < minOpaque) minX++;
  while (maxX > minX && colCount(maxX) < minOpaque) maxX--;
  while (minY < maxY && rowCount(minY) < minOpaque) minY++;
  while (maxY > minY && rowCount(maxY) < minOpaque) maxY--;

  const pad = 4;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  const cropped = Buffer.alloc(cropW * cropH * 4);

  for (let y = 0; y < cropH; y++) {
    const srcStart = ((minY + y) * width + minX) * 4;
    cropped.set(pixels.subarray(srcStart, srcStart + cropW * 4), y * cropW * 4);
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });
  await sharp(cropped, { raw: { width: cropW, height: cropH, channels: 4 } })
    .png()
    .toFile(output);

  console.log(`Wrote ${output} (${cropW}x${cropH})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
