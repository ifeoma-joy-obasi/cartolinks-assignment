"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { AddCircleIcon  } from "../../../assets/index";


type MenuItem = { label: string; href?: string; onClick?: () => void; Icon?: React.ElementType };

const MENU: MenuItem[] = [
  { label: "benevolentnimblebat", href: "/manageaccount",   },
  { label: "Create a new team", href: "/newteam", Icon: AddCircleIcon },
];

export default function LogoUser(): JSX.Element {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => setOpen((v) => !v);

  // Close when clicking outside
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (!containerRef.current) return;
      if (target && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleOutside);
      document.addEventListener("touchstart", handleOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">

    <div className="flex items-center gap-8 cursor-pointer">

      {/* Trigger */}
      <button
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="profile-dropdown"
        className="flex items-center gap-3 transition cursor-pointer focus-within:outline-none focus-visible:outline-none "
      >
        

        {/* chevron */}
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-500 transform transition-transform duration-150 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        {/* User Gradient Circle */}
      <div className="p-[2px] rounded-xl bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-blue-100" />
      </div>

        {/* username */}
        <span className="text-[12px] font-light text-gray-500 dark:text-gray-200 truncate max-w-[10rem]">
          benevolentnimblebat
        </span>

      </button>
</div>


      {/* Dropdown with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="profile-dropdown"
            ref={dropdownRef}
            role="menu"
            aria-labelledby="profile-button"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-54 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg z-50 overflow-hidden"
          >
            <div className="m-2 ">
              <h1 className="text-sm font-medium text-gray-700 dark:text-gray-200 my-1">Workspaces</h1>
              
              {MENU.map((m, i) => (
            <div
              key={m.label}
              className={`text-gray-900 text-sm font-medium focus:outline-none`}
            >
              <div
                className={`flex items-center gap-2 rounded-md p-2 transition ${
                  i === 0
                    ? "bg-gray-100 dark:bg-gray-700 mb-0.5" // first item → always gray background
                    : "hover:bg-blue-50 hover:text-blue-500" // second item → hover only
                }`}
              >
                {/* Gradient circle only for first item */}
                {i === 0 && (
                  <div className="p-[2px] rounded-xl bg-gray-100">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-blue-100" />
                  </div>
                )}

                {/* Icon only for second item */}
                {i === 1 && m.Icon && (
                  <div className="bg-blue-100 p-1 rounded-md">
                  <m.Icon className="text-[18px]" />
                </div>
                )}

                <Link
                  href={m.href!}
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setOpen(false)}
                  
                >
                  {m.label}
                </Link>
              </div>
            </div>
          ))}


           
        </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
