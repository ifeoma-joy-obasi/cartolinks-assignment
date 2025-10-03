"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheveronLeftIcon, CheveronRightIcon } from "../../../../assets/index";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  { id: 1, src: "/images/carousel-img-one.webp" },
  { id: 2, src: "/images/carousel-img-two.webp" },
  { id: 3, src: "/images/carousel-img-three.webp" },
  { id: 4, src: "/images/carousel-img-four.webp" },
  { id: 5, src: "/images/carousel-img-five.webp" },
  { id: 6, src: "/images/carousel-img-six.webp" },
  { id: 7, src: "/images/carousel-img-seven.webp" },
  { id: 8, src: "/images/carousel-img-eight.webp" },
  { id: 9, src: "/images/carousel-img-nine.webp" },
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);


  const [direction, setDirection] = useState<"next" | "prev" | null>(null);

const next = () => {
  setDirection("next");
  scrollToIndex(Math.min(current + 1, IMAGES.length - 1));
};
const prev = () => {
  setDirection("prev");
  scrollToIndex(Math.max(current - 1, 0));
};


  // update current index while user scrolls
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const gap =
        parseFloat(getComputedStyle(container).columnGap || getComputedStyle(container).gap || "0") || 0;
      const slideWidth = (firstSlideRef.current?.getBoundingClientRect().width ?? 0) + gap;
      if (slideWidth <= 0) return;
      const index = Math.round(container.scrollLeft / slideWidth);
      setCurrent(Math.max(0, Math.min(IMAGES.length - 1, index)));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const getSlideStep = () => {
    const container = containerRef.current;
    if (!container || !firstSlideRef.current) return 0;
    const gap =
      parseFloat(getComputedStyle(container).columnGap || getComputedStyle(container).gap || "0") || 0;
    return firstSlideRef.current.getBoundingClientRect().width + gap;
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const step = getSlideStep();
    const left = Math.round(index * step);
    container.scrollTo({ left, behavior: "smooth" });
    setCurrent(index); // FIX: update current when using arrows or dots
  };

 

  return (
    <div className="relative w-full ">
      {/* scroll container */}
      <div
        ref={containerRef}
        className="carousel flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ columnGap: "2rem" }}
      >
        {IMAGES.map((img, i) => (
          
    <motion.div
      key={img.id}
      ref={i === 0 ? firstSlideRef : undefined}
      className="flex-shrink-0 snap-start rounded-2xl overflow-hidden w-[90%] sm:w-[70%] md:w-[60%]"
      initial={{ opacity: 1, scale: 1 }}
      animate={
        i === current && direction
          ? { scale: 1.05, opacity: 1 }
          : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      onAnimationComplete={() => setDirection(null)}
    >
      {/* make this relative so absolute children + overlay stay inside */}
<div className="relative w-full h-[240px] sm:h-[360px] md:h-[480px]">
  <Image
    src={img.src}
    alt={`Slide ${i + 1}`}
    fill
    className="object-cover"
    draggable={false}
  />

  {/* ADJUSTMENT 1: subtle dark overlay */}
  <div className="absolute inset-0 bg-black/22"></div>

  {/* text overlay ONLY for first image */}
  {i === 0 && (
    <div>
      <h3 className="absolute cursor-pointer top-4 left-4 right-4 lg:top-8 lg:left-8 lg:right-8 text-white/75 text-[12px] lg:text-sm">
        NEW IMAGE MODEL
      </h3>

  <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
  <div className="sm:max-w-[65%] md:max-w-[60%] lg:max-w-[55%]">
    <h2 className="cursor-pointer text-white text-sm sm:text-lg md:text-2xl font-semibold drop-shadow-md mb-1">
      WAN 2.2 Image generation
    </h2>
    <p className="cursor-pointer text-white text-[11px] sm:text-[12px] md:text-sm opacity-80 drop-shadow-sm line-clamp-2 md:line-clamp-none">
      Generate complex images with the brand new and powerful WAN 2.2 model.
      Exceptional prompt adherence and ultra-realistic textures.
    </p>
  </div>

  <button className="w-[95px] sm:w-[115px] md:w-[130px] px-4 py-2.5 cursor-pointer bg-white text-gray-900 rounded-full text-[11px] sm:text-sm font-medium hover:scale-95 active:scale-95 transition focus:outline-none">
    Try WAN 2.2
  </button>
</div>

    </div>
  )}



    {/* text overlay ONLY for second image */}
    {i === 1 && (
    <div>
         <h3 className="absolute cursor-pointer top-4 left-4 right-4 lg:top-8 lg:left-8 lg:right-8  text-white/75 text-[12px] lg:text-sm">OPEN SOURCE MODEL</h3>
      <div className="absolute bottom-6 left-6 right-6 text-white max-w-[70%] sm:max-w-[65%] md:max-w-[60%] lg:max-w-[55%]">
        <h2 className="cursor-pointer text-white text-xl md:text-2xl font-semibold drop-shadow-md mb-1">FLUX.1 Krea</h2>
      <p className="cursor-pointer text-white text-[11px] sm:text-[12px] md:text-sm opacity-85 drop-shadow-sm line-clamp-2 md:line-clamp-none">
        We&apos;re making the weights to our FLUX.1 Krea model open source.
        Download and run our model weights. Read the technical report, or 
        generate with it in Krea Image.
        </p>
      </div>
      </div>
    )}
  </div>
</motion.div>


        ))}
      </div>

      {/* arrows */}
      <div className="absolute  right-6  flex gap-3 z-20">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full shadow hover:scale-95 transition disabled:opacity-40 focus-outline-none focus-within:outline-none focus-visible:"
          disabled={current === 0}
        >
          <CheveronLeftIcon className="cursor-pointer w-4 h-4 text-gray-700 dark:text-gray-100" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full shadow hover:scale-95 transition disabled:opacity-40 focus-outline-none focus-within:outline-none focus-visible:"
          disabled={current >= IMAGES.length - 1}
        >
          <CheveronRightIcon className="cursor-pointer w-4 h-4 text-gray-700 dark:text-gray-100" />
        </button>
      </div>

      {/* dots */}
      <div className="mt-3 flex gap-2 absolute left-12  md:left-75 lg:left-110 xl:left-160 ">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            className={`cursor-pointer w-2 h-2 rounded-full transition ${
              idx === current ? "bg-gray-800 dark:bg-zinc-800" : "bg-gray-200 dark:bg-zinc-700"
            }`}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
