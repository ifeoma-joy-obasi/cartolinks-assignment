"use client"


import React, { useEffect } from "react";
import LogoUser from "./LogoUser";
import NavIcons from "./NavIcons";
import ActionButtons from "./ActionButtons";
import RightIcons from "./RightIcons";
import { useState } from "react";
import { CloseButtonIcon, SettingsIcon } from "@/assets";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SidebarDropdown from "../../components/navbar/SidebarDropdown";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(true);
  
    // Prevent background scroll when sidebar is open
useEffect(() => {
  if (isOpen) {
    // Save current scroll position
    const scrollY = window.scrollY;

    // Lock scroll
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  } else {
    // Restore scroll
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    document.body.style.width = "";
    // Scroll back to where user was
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
}, [isOpen]);



  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div className="hidden lg:flex">
      <LogoUser />
      </div>
     
     {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
             className="lg:hidden"
            >
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" aria-hidden='true' role="img" className="h-5 w-5 iconify iconify--mynaui cursor-pointer">
        <path fill="gray" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049">

        </path>
    
      </svg>
</button>


      <div className="hidden lg:flex">
      <NavIcons />
      </div>

      <div className="hidden lg:flex items-center gap-4">
       <ActionButtons />
       <RightIcons />
      </div>

        {/* Overlay */}
{isOpen && (
  <div
    className="lg:hidden fixed inset-0 bg-white/10 backdrop-blur-md z-40 cursor-pointer"
    onClick={() => setIsOpen(false)}
  ></div>
)}
    

    
        {/* Sidebar */}
        <aside
        className={`bg-white/70 backdrop-blur-md shadow-[4px_0_12px_rgba(0,0,0,0.08)] z-50 lg:hidden fixed top-0 left-0 h-full w-[80%] md:w-90 dark:bg-gray-900 transform transition-transform duration-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-white backdrop-blur-md z-50 flex justify-between items-start p-4  border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-[22px]"
          >
          <CloseButtonIcon className="cursor-pointer"/>
          </button>
          

    <SidebarDropdown />

    </div>


        {/* Sidebar Body */}
        <div className="overflow-y-auto h-[calc(100%-56px)] sidebar-scroll bg-white">
         {/* scrollable content */}
     
     <div className="px-4 py-6 grid place-items-start ">
        
        <Link href='/' className="flex items-center gap-3">
         <div className="bg-gray-900 text-white/95  relative flex aspect-square h-11 items-center justify-center rounded-[10px] opacity-100">
          <svg aria-label="Krea Logo" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path>
          <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path>
          </svg>
         </div>
         <p className="text-black ">Home</p>
         </Link>
      </div>

<h2 className="font-medium text-2xl px-4 mb-5">Account</h2>

<div className="space-y-4 px-4 ">
<div className="flex items-center justify-between cursor-pointer">
  <div className="flex items-center gap-3 ">
<div className=" cursor-pointer text-white/95 bg-opacity-15 bg-gray-900 relative aspect-square h-11 rounded-[10px] opacity-100">
  <svg xmlns="http://www.w3.org/2000/svg" width='14' height='14' viewBox="0 0 24 24" fill="none" stroke='currentColor' strokeWidth='1.7142857142857142' strokeLinecap='round' strokeLinejoin='round' className="lucide-icon lucide lucide-sparkles absolute inset-0 m-auto h-5 w-5 fill-current transition-transform duration-200 ease-out group-hover:scale-110">
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
  <path d="M5 3v4"></path>
  <path d="M19 17v4"></path>
  <path d="M3 5h4"></path>
  <path d="M17 19h4"></path>
  </svg>
</div>
<p>Upgrade</p>
</div>
<button className="cursor-pointer bg-blue-600 ml-auto flex h-9 w-22 items-center justify-center rounded-full text-xs font-medium text-white">Get Pro</button>
</div>

<div className="flex item-center justify-between cursor-pointer">
  
  <div className="flex items-center gap-3">
    {/* user gradientcircle */}
<div className="p-[2px] rounded-xl bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-blue-100" />
      </div>
<p>Profile</p>
</div>
<button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>

<div className="flex items-center justify-between cursor-pointer">
  <div className="flex items-center gap-3 ">
<div className="bg-opacity-15 bg-gray-100 relative aspect-square h-11 rounded-[10px] opacity-100">
  <SettingsIcon className="absolute inset-0 m-auto h-5 w-5 fill-current transition-transform duration-200 ease-out group-hover:scale-110"/>
</div>
<p>Settings</p>
</div>
<button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>

</div>


{/* collapsible section toggle.*/}
        <div>
      {/* Section Header */}
      <div
        className="flex items-center justify-between cursor-pointer px-4 rounded-lg"
        onClick={() => setAppsOpen(!appsOpen)}
      >
        <span className="font-medium text-2xl  mt-5 mb-4">Apps</span>
        <ChevronDownIcon
          className={`h-4 w-4 font-medium transform transition-transform duration-200 ${
            appsOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </div>

      {/* Section Content */}
      {appsOpen && (
        <div className="space-y-4 px-4">
          
          {/* content */}
          {/* item 1 */}
  <div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
      <div className=" relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{
        background: "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
        width: "44px",
        height: "44px",
      }}>
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto text-white"> 
       <path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path>
       <rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect>
       <path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        
      </div>
      <p>Image</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 2 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
      <div className="relative aspect-square rounded-[10px] bg-[oklch(79.55%_0.1875_75.3501)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{
      width: "44px", 
      height: "44px",
      }}>
     <svg width="24" className="absolute inset-0 bottom-[1px] left-0.5 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fillRule="evenodd" clipRule="evenodd" d="M20.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path>
     <path fillRule="evenodd" clipRule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path>
     <rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect>
        
     </svg>
        
      </div>
      <p>Video</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 3 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
    <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{background: "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)", width: "42px", height: "42px",}}>
      <svg width="24" height="24" className="absolute inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"></path>
      <path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"></path>
      <path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      </div>
      <p>Realtime</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 4 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">

    <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{background: "linear-gradient(0deg, #888888 0%, #000000 100%)", width: "42px", height: "42px"}}>
      <svg width="24" height="24" className="absolute inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path>
      </svg>
      </div>

      <p>Enhancer</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 5 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
     <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{background: "linear-gradient(0deg, rgb(187, 202, 145) 0%, rgb(60, 135, 143) 60%, rgb(7, 40, 15) 100%)", width: '44px', height: '44px'}}>
     <svg width="22" height="22" className="absolute inset-0  right-[1px] m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M16.4998 21.174C15.4998 20.5 14.3718 20 12.9998 20C10.9418 20 9.07179 22.356 6.99979 22C4.92779 21.644 4.22479 18.631 5.49979 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.165 8.40356C10.7043 10.6535 12.5111 12.4106 14.7882 12.8777L6.83049 18.7674C6.60581 18.9339 6.32644 19.0157 6.04426 18.9976C5.76209 18.9795 5.49628 18.8627 5.2962 18.6689L4.34224 17.7427C4.14504 17.5516 4.02487 17.2984 4.00345 17.0288C3.98204 16.7593 4.06079 16.4912 4.22547 16.2731L10.165 8.40356Z" fill="currentColor"></path>
     <circle cx="16.5" cy="6.5" r="5.5" fill="currentColor"></circle>
     </svg>
     </div>
      <p>Video Lipsync</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 6 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
     <div className="relative aspect-square items-center justify-center rounded-[10px] inset-ring-[0.5px] inset-ring-white/10 block shrink-0 bg-[#1B1C1D]" style={{width: '44px', height: '44px'}}>
       <svg width="42" height="42" className="absolute inset-0 z-10 m-auto shrink-0 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M23.6904 14.625C24.4364 14.625 25.1517 14.3287 25.6792 13.8012C26.2066 13.2738 26.5029 12.5584 26.5029 11.8125C26.5029 11.0666 26.2066 10.3512 25.6792 9.82376C25.1517 9.29632 24.4364 9 23.6904 9C22.9445 9 22.2291 9.29632 21.7017 9.82376C21.1742 10.3512 20.8779 11.0666 20.8779 11.8125C20.8779 12.5584 21.1742 13.2738 21.7017 13.8012C22.2291 14.3287 22.9445 14.625 23.6904 14.625Z" fill="currentColor"></path>
         <path d="M19.8084 21.5699L18.2221 37.4156C18.1717 37.7942 18.2737 38.1775 18.5058 38.4809C18.7378 38.7844 19.081 38.9832 19.4596 39.0337C19.8383 39.0842 20.2215 38.9821 20.525 38.7501C20.8285 38.518 21.0273 38.1749 21.0778 37.7962L22.5965 28.6743C22.6383 28.4147 22.7712 28.1785 22.9713 28.008C23.1715 27.8375 23.4258 27.7439 23.6887 27.7439C23.9516 27.7439 24.2059 27.8375 24.4061 28.008C24.6062 28.1785 24.7391 28.4147 24.7809 28.6743L26.2996 37.7962C26.3501 38.1749 26.549 38.518 26.8524 38.7501C27.1559 38.9821 27.5391 39.0842 27.9178 39.0337C28.2964 38.9832 28.6396 38.7844 28.8716 38.4809C29.1037 38.1775 29.2057 37.7942 29.1553 37.4156L27.5709 21.5699C27.5307 21.1575 27.5821 20.7413 27.7215 20.351C27.8608 19.9607 28.0847 19.6061 28.3771 19.3124L33.0646 13.2824C33.296 12.9729 33.3982 12.5856 33.3499 12.2022C33.3015 11.8188 33.1063 11.4691 32.8053 11.2267C32.5044 10.9843 32.1211 10.868 31.7362 10.9024C31.3513 10.9369 30.9947 11.1192 30.7415 11.4112L26.7534 16.1999C26.5951 16.4046 26.3798 16.5579 26.1346 16.6406C25.7034 16.7793 24.8878 16.9706 23.6896 16.9706C22.4896 16.9706 21.6759 16.7793 21.2428 16.6406C20.9983 16.5576 20.7837 16.4043 20.6259 16.1999L16.6378 11.4112C16.387 11.1111 16.0285 10.9214 15.6393 10.883C15.2501 10.8445 14.8614 10.9603 14.5567 11.2055C14.2521 11.4507 14.0558 11.8057 14.0102 12.1941C13.9646 12.5825 14.0732 12.9733 14.3128 13.2824L19.0003 19.3124C19.5946 19.9049 19.8928 20.7337 19.8084 21.5699Z" fill="currentColor"></path>
       </svg>
     </div>
      <p>Motion Transfer</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>

{/* item 7*/}
<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
   <svg
  width="44"
  height="44"
  viewBox="0 0 24 24"
  fill="none"
  className="dark:text-primary-0 text-[#c4c4c5] block shrink-0"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <clipPath id="circleMask">
      <circle cx="12" cy="12" r="7" />
    </clipPath>

    <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.6" />
      <stop offset="75%" stopColor="white" stopOpacity="0.15" />
      <stop offset="100%" stopColor="white" stopOpacity="0" />
    </linearGradient>
  </defs>

 
  <image
    href="https://www.krea.ai/train-icon-photo.webp"
    x="5"
    y="5"
    width="14"
    height="14"
    clipPath="url(#circleMask)"
  />

  <circle cx="12" cy="12" r="6" fill="url(#fadeGradient)" />

  <path
    d="M16.625 20.1226C14.6815 21.2446 12.3964 21.6219 10.1954 21.1841C7.99441 20.7463 6.02762 19.5232 4.66148 17.7429C3.29534 15.9625 2.62303 13.7462 2.7698 11.5068C2.91658 9.26752 3.87243 7.15792 5.45926 5.57108"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
  <path
    d="M20.0107 7.48682C21.0289 9.25025 21.4366 11.3004 21.1709 13.3192C20.9051 15.338 19.9806 17.2127 18.5407 18.6526"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
  <path
    d="M12 2.86182C13.2147 2.86182 14.4176 3.10107 15.5398 3.56593C16.6621 4.03079 17.6818 4.71214 18.5407 5.57108"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
  <path
    d="M7.375 4.10108C8.07507 3.6969 8.8251 3.38622 9.60592 3.177"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
    </svg>

      <p>Train</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 8 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
     <div className="relative aspect-square items-center justify-center rounded-[10px] inset-ring-[0.5px] inset-ring-white/10 block shrink-0 bg-[#2f2f2f]" style={{width: "44px", height: "44px"}}><svg width="22" height="22" className="absolute inset-0 m-auto text-white" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41872 17.2693L9.15255 21.7476C9.72424 22.0792 10.256 22.089 10.8474 21.7476L18.5813 17.2693C19.4977 16.7372 20 16.1948 20 14.739V6.78622C20 5.67189 19.5666 5.03911 18.7587 4.56699L11.7933 0.530823C10.5814 -0.182073 9.39888 -0.17179 8.20673 0.530823L1.24133 4.56742C0.433394 5.03911 0 5.67189 0 6.78665V14.739C0 16.1948 0.502333 16.7372 1.41872 17.2693ZM10 10.1104L2.49233 5.78243L8.90622 2.04658C9.6553 1.61516 10.3249 1.60531 11.0938 2.04658L17.5073 5.78243L10 10.1104ZM2.3452 15.8632C1.78318 15.5419 1.59612 15.2304 1.59612 14.6885V7.19793L9.17231 11.6064V19.8197L2.3452 15.8632ZM17.6552 15.8632L10.8277 19.8193V11.606L18.4039 7.19793V14.6893C18.4039 15.2313 18.2168 15.5427 17.6552 15.8641" fill="currentColor"></path></svg>
     </div>
      <p>3D Objects</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>


{/* item 9 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
     <svg width="44" height="44" viewBox="0 0 46 46" fill="none" className="block shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M5.16699 9.41601C5.16699 8.31144 6.06242 7.41602 7.16699 7.41602H16.7125C17.4968 7.41602 18.2087 7.87442 18.5332 8.58841L19.3008 10.277C19.6253 10.9909 20.3372 11.4493 21.1215 11.4493H39.8337C40.9382 11.4493 41.8337 12.3448 41.8337 13.4493V25.5827C41.8337 26.6873 40.9382 27.5827 39.8337 27.5827H7.16699C6.06243 27.5827 5.16699 26.6873 5.16699 25.5827V9.41601Z" fill="#2B93BF"></path><rect x="5.16699" y="13.2598" width="36.6667" height="25.3229" rx="2" fill="#3AC4FF"></rect><path d="M5.28147 36.2445C5.17675 35.6966 5.16776 34.9794 5.16699 33.907H41.8335C41.8327 34.9794 41.8238 35.6966 41.719 36.2445H5.28147Z" fill="black" fillOpacity="0.05"></path><path d="M9.76801 38.5841H37.2321C38.8427 38.5841 39.648 38.5841 40.2631 38.2444C40.8043 37.9456 41.2442 37.4688 41.5199 36.8824C41.6093 36.6923 41.6731 36.4855 41.7188 36.2466H5.28125C5.32692 36.4855 5.3908 36.6923 5.48014 36.8824C5.75586 37.4688 6.1958 37.9456 6.73692 38.2444C7.35209 38.5841 8.1574 38.5841 9.76801 38.5841Z" fill="black" fillOpacity="0.1"></path></svg>
      <p>Assets</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>

{/* item 10 */}

<div className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3 ">
     <div className="relative aspect-square rounded-[10px] bg-[oklch(79.29%_0.2514_150.54)] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{width: "44px", height: "44px"}}><svg width="24" height="24" className="absolute inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.02 3.14111C17.7 3.14111 22 7.31876 22 12.0983C22 17.6416 16.96 21.0825 12 21.0825C10.36 21.0825 8.54 20.6872 7.08 19.9146C6.57 19.6361 6.14 19.4294 5.59 19.5911L3.24498 20.2919C2.73498 20.4357 2.27498 20.0763 2.42498 19.5911L3.42 17.417C3.53 17.1385 3.51 16.842 3.35 16.6084C2.49 15.1889 2 13.6346 2 12.1253C2 7.39961 6.21 3.14111 12.02 3.14111Z" fill="currentColor"></path></svg>
     </div>
      <p>Chat</p>
      </div>
      <button className="cursor-pointer bg-gray-100 text-black rounded-full ml-auto flex h-9 w-22 items-center justify-center text-xs font-medium">Open</button>
</div>





</div>
      )}

    </div>
    


{/* sessions */}
<div className='px-4'>
<h2 className="font-medium text-2xl  mt-5 mb-4">Sessions</h2>

<div className="flex gap-3 items-center mb-20">
 
    <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{
          background: "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)",
          width: "42px",
          height: "42px",
          }}
        >
    <svg width="24" height="24" className="absolute inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.854L12 5.51603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
    <circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" strokeWidth="1.5"></circle>
    <path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"></path>
    <path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    </path>
    </svg>
    </div>
    <h3 className="font-medium text-sm">Edit</h3>

</div>
</div>

  
  
  </div>  




    </aside>


</div>
    </nav>
  );
};

export default Navbar;



