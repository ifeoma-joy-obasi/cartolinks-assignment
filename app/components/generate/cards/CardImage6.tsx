 import React from "react";
 export default React.memo(function CardImage1() {
   return (

<div className="w-full flex items-center  gap-3">
  {/* Icon */}
  <div
    className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 shrink-0"
    style={{
      background:
        "linear-gradient(0deg, rgb(187, 202, 145) 0%, rgb(60, 135, 143) 60%, rgb(7, 40, 15) 100%)",
      width: "44px",
      height: "44px",
    }}
  >
    <svg
      width="22"
      height="22"
      className="absolute inset-0 right-[1px] m-auto text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4998 21.174C15.4998 20.5 14.3718 20 12.9998 20C10.9418 20 9.07179 22.356 6.99979 22C4.92779 21.644 4.22479 18.631 5.49979 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.165 8.40356C10.7043 10.6535 12.5111 12.4106 14.7882 12.8777L6.83049 18.7674C6.60581 18.9339 6.32644 19.0157 6.04426 18.9976C5.76209 18.9795 5.49628 18.8627 5.2962 18.6689L4.34224 17.7427C4.14504 17.5516 4.02487 17.2984 4.00345 17.0288C3.98204 16.7593 4.06079 16.4912 4.22547 16.2731L10.165 8.40356Z"
        fill="currentColor"
      ></path>
      <circle cx="16.5" cy="6.5" r="5.5" fill="currentColor"></circle>
    </svg>
  </div>

  {/* Text + New badge */}
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-3">
      <h3 className="font-medium text-sm">Video Lipsync</h3>
      <button className="bg-blue-600 text-white px-1.5 pb-0.5 rounded-full text-xs">
        New
      </button>
    </div>
    <p className="text-sm text-gray-500 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">
      Lip sync any video to any audio.
    </p>
  </div>

  {/* Open button (fixed size) */}
  <button className="cursor-pointer bg-gray-100 dark:bg-zinc-800 text-black dark:text-white rounded-full h-9 w-15 text-xs font-medium shrink-0">
    Open
  </button>
</div>


  );
});
