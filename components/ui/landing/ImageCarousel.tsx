"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    image: "/image/project_1.jpg",
    title: "Track prices effortlessly",
    subtitle: "Paste any product link and see its full price history.",
  },
  {
    image: "/image/project_2.jpg",
    title: "Shop smarter, save better",
    subtitle: "Compare current price with past highs and lows.",
  },
  {
    image: "/image/projectc_3.jpg",
    title: "Never miss a price drop",
    subtitle: "Let data guide your next purchase, not guesswork.",
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[index];

  const goTo = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section className="relative w-full bg-black">
      <div className="relative mx-auto max-w-6xl h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-b-2xl">

        <img
          src={current.image}
          alt=""
          className="h-full w-full object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-2 py-2 text-white text-sm hover:bg-black/70"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 px-2 py-2 text-white text-sm hover:bg-black/70"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
