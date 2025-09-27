"use client";

import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


type Item = {
  id: string | number;
  title?: string;
  subtitle?: string;
  image?: string;
  // new: every item can optionally provide its own pre-built React node
  content?: React.ReactNode;
};

type Props = {
  items: Item[];
  collapsedCount?: number;
  defaultOpen?: boolean;
};


export default function GenerateSection({
  items,
  collapsedCount = 4,
  defaultOpen = false,
}: Props) {
   const id = useId();
  const [open, setOpen] = useState<boolean>(defaultOpen);
  // Visible items depend on open state
  const visibleItems = open ? items : items.slice(0, Math.min(collapsedCount, items.length));

  

  return (
    <section className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold leading-none">Generate</h2>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={`generate-grid-${id}`}
          onClick={() => setOpen((v) => !v)}
          className={`cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition
            focus:outline-none 
            ${open ? "text-sky-600" : "text-gray-700 hover:bg-gray-100 active:bg-gray-100 dark:hover:bg-zinc-700 dark:active:bg-zinc-700 dark:text-gray-200"}`}
        >
          <ChevronDownIcon
            className={`w-4 h-4 transform transition-transform duration-200 ${open ? "rotate-0" : "rotate-180"}`}
            aria-hidden
          />
          <span>{open ? "Show all" : "Show less"}</span>
        </button>
      </div>

      {/* grid: animated layout changes with framer-motion */}
   <motion.div id={`generate-grid-${id}`} layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence initial={false}>
            {visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className=""
              >
                {/* NEW: if item.content exists, render it. Otherwise, fallback to simple card */}
                {item.content ? (
                  item.content
                ) : (
                  <div className="rounded-2xl p-4 bg-white/80 dark:bg-gray-800 shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.title ?? ""} className="w-full h-40 object-cover rounded-md mb-3" />
                    ) : null}
                    <div>
                      <div className="text-sm font-medium">{item.title ?? "Untitled"}</div>
                      {item.subtitle ? <div className="text-xs text-gray-500 mt-1">{item.subtitle}</div> : null}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}


