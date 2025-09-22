"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

import Link from "next/link";
// import React, { useState } from "react";
import {
   HomeIcon,
    ImageIcon, 
    EnhancerIcon, 
    AssetIcon, 
    EditIcon, 
    PencilIcon, 
    VideoCameraIcon
  } from "../../../assets/index";


const navItems = [
  { name: "Home", icon: HomeIcon, href: "/" },
  { name: "Image", icon: ImageIcon, href: "/image" },
  { name: "Video", icon: VideoCameraIcon, href: "/video" },
  { name: "Enhancer", icon: EnhancerIcon, href: "/enhancer" },
  { name: "Edit", icon: PencilIcon, href: "/edit" },
  { name: "Realtime", icon: EditIcon, href: "/realtime" },
  { name: "Asset", icon: AssetIcon, href: "/asset" },
];

const CenterNav: React.FC = () => {
  const pathname = usePathname();


  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl p-2 space-x-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.href} key={item.name}>
          <Tooltip.Provider key={item.name} delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`p-3 cursor-pointer rounded-xl flex items-center justify-center transition ${
                  pathname === item.href
                    ? "bg-white shadow-md"
                    : "hover:bg-gray-300"
                }`}

                >
                  <Icon className="w-4 h-4 text-black" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="bg-gray-100 text-black px-2 py-1 rounded-md text-[12px] shadow-md mt-4"
                >
                  {item.name}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
          </Link>
        );
      })}
    </div>
  );
}
export default CenterNav;