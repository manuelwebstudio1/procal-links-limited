import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  theme?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="relative isolate flex items-center bg-transparent"
      aria-label="Procal Links Limited home"
    >
      <Image
        src="/procal-logo.png"
        alt="Procal Links Limited"
        width={873}
        height={555}
        priority
        unoptimized
        className={
          compact
            ? "h-12 w-auto bg-transparent object-contain object-left"
            : "h-[4.5rem] w-auto bg-transparent object-contain object-left sm:h-[5rem]"
        }
        style={{ background: "transparent", mixBlendMode: "normal" }}
      />
    </Link>
  );
}
