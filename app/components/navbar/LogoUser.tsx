"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { RoundSettingsIcon,CardIcon,LogOutIcon,HandsIcon } from "../../../assets/index";


type MenuItem = { label: string; href?: string; onClick?: () => void; Icon?: React.ElementType };

const MENU: MenuItem[] = [
  { label: "Manage account", href: "/manageaccount", Icon: RoundSettingsIcon },
  { label: "Plans & Pricing", href: "/planandpricing", Icon: CardIcon },
  { label: "Join community", href: "/billing", Icon: HandsIcon },
  {
    label: "Log out",
    Icon: LogOutIcon,
    onClick: () => {
      console.log("Sign out clicked");
    },

  },
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

    <div className="flex items-center gap-8 cursor-pointer ">

      {/* Logo */}
      <Image src="/Logo.png" alt="Logo" width={28} height={28} />
        

      {/* Trigger */}
      <button
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="profile-dropdown"
        className="flex items-center gap-3 transition cursor-pointer focus-within:outline-none focus-visible:outline-none"
      >
        

        {/* user circle */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 via-blue-200 to-blue-50" />

        {/* username */}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate max-w-[10rem]">
          benevolentnimblebat
        </span>

        {/* chevron */}
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-500 transform transition-transform duration-150 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
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
            className="absolute left-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg z-50 overflow-hidden"
          >
            <div className="m-1">
              {MENU.map((m) =>
                    m.href ? (
                  <div key={m.label} className="text-[14px] font-medium text-gray-700 dark:text-gray-200 focus:outline-none">
                    <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-3">
                    {m.Icon && <m.Icon className="text-[18px]"/>}


                  <Link
                    
                    href={m.href}
                    role="menuitem"
                    tabIndex={0}
                    className=""
                    onClick={() => setOpen(false)}
                  >
                    {m.label}
                  </Link>
                  </div>
                  
                  </div>
                ) : (
                  
                    
              <button
              key={m.label}
              role="menuitem"
              tabIndex={0}
              onClick={() => {
                m.onClick?.();
                setOpen(false);
              }}
              className="w-full rounded-md p-3 cursor-pointer flex items-center gap-2 text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              {m.Icon && <m.Icon className="text-[18px] text-gray-600 dark:text-gray-300" />}
              {m.label}
            </button>
                 
                )

              )}

              <div className="border-t border-gray-100">

                <div className="flex flex-col gap-1.5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-3 mt-1">
                  <p className="text-sm font-medium text-gray-700 ">0% daily credits used</p>
                  <div className="bg-gray-200 w-full rounded-full p-0.5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
