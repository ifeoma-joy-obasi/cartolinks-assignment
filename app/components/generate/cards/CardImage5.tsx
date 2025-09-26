import React from "react";
export default React.memo(function CardImage5() {
  return (
    <div className="w-full flex items-center gap-3">
      


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

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm">Edit</h3>
          <button className="bg-blue-600 text-white px-1.5 pb-0.5 rounded-full text-xs">New</button>
        </div>
        <p className="text-sm text-gray-500 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">Add objects, change style, or expand photos and generations.</p>
      </div>

      {/* Open button (fixed size) */}
  <button className="cursor-pointer bg-gray-100 dark:bg-zinc-800 text-black dark:text-white rounded-full h-9 w-15 text-xs font-medium shrink-0">
    Open
  </button>
    </div>

  );
});






