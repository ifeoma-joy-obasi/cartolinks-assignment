"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheveronLeftIcon, CheveronRightIcon } from "../../../../assets/index";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  { id: 1, src: "https://s.krea.ai/announce-wan-2-2-image.webp" },
  { id: 2, src: "https://s.krea.ai/OSSKreaFlux1_poster.webp" },
  { id: 3, src: "https://s.krea.ai/realtime-video-poster.webp" },
  { id: 4, src: "https://s.krea.ai/rt-video-beta-announcement.webp" },
  { id: 5, src: "https://s.krea.ai/quick-action-remove-object.webp" },
  { id: 6, src: "https://s.krea.ai/quick-action-change-haircut.webp" },
  { id: 7, src: "https://s.krea.ai/quick-action-change-lighting.webp" },
  { id: 8, src: "https://s.krea.ai/a_close-up_portrait_of_a_whimsical_dinosaur_made_entirely_of_knitted_yarn_in_shades_of_pink_white_a_1tvns5kbqfc05dc8e6wl_3.webp" },
  { id: 9, src: "https://s.krea.ai/e06d7a87-e1de-4910-9083-7be5986b45f0_512.webp" },
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
            className="flex-shrink-0 snap-start rounded-2xl overflow-hidden"
            style={{ width: "60%" }}
            initial={{ opacity: 1, scale: 1 }}
            animate={
              i === current && direction
                ? { scale: 1.05, opacity: 1 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.35, ease: "easeOut" }}
            onAnimationComplete={() => setDirection(null)} // reset after anim
          >
          <Image
            src={img.src}
            alt={`Slide ${i + 1}`}
            width={1280}
            height={480}
            className="w-full h-[480px] object-cover "
            draggable={false}
          />
        </motion.div>


        ))}
      </div>

      {/* arrows */}
      <div className="absolute  right-6  flex gap-3 z-20">
        <button
          onClick={prev}
          aria-label="Previous"
          className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full shadow hover:scale-95 transition disabled:opacity-40"
          disabled={current === 0}
        >
          <CheveronLeftIcon className="cursor-pointer w-4 h-4 text-gray-700 dark:text-gray-100" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full shadow hover:scale-95 transition disabled:opacity-40"
          disabled={current >= IMAGES.length - 1}
        >
          <CheveronRightIcon className="cursor-pointer w-4 h-4 text-gray-700 dark:text-gray-100" />
        </button>
      </div>

      {/* dots */}
      <div className="mt-3 flex gap-2 absolute left-14  md:left-75 lg:left-110 xl:left-160 ">
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
