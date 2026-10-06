"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { whatsappLink } from "@/data/site";

const SLIDE_MS = 5500;

export function Hero() {
  const slides = images.heroSlides;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [index, slides.length]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-procal-950 text-white">
      <div className="absolute inset-0" aria-hidden>
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${src})`,
              transitionProperty: "opacity, transform",
              transitionDuration: i === index ? "1200ms, 8000ms" : "1200ms, 1200ms",
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.88)_0%,rgba(13,28,51,0.62)_46%,rgba(13,28,51,0.28)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.35)_0%,transparent_28%,rgba(7,17,31,0.45)_100%)]" />

      <div className="container-procal relative z-10 flex min-h-[100svh] flex-col justify-center pb-36 pt-28 lg:pb-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-light"
        >
          Welcome to Procal Links Limited
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl font-serif text-[3.1rem] leading-[1.05] sm:text-6xl lg:text-[5.1rem]"
        >
          Find the Right <span className="text-gold">Address</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-5 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          Buy. Rent. Sell. Connect.
          <span className="mt-2 block text-base text-white/70 sm:text-lg">
            Discover homes, land and commercial opportunities with Procal Links Limited, based at 69 Lagos Ave, Ghana.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-procal-950 transition hover:bg-gold-light"
          >
            Explore Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold hover:text-gold-light"
          >
            Talk to an Agent
          </a>
        </motion.div>

        <div className="mt-10 flex items-center gap-2" aria-label="Hero image slides">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
