import React from "react";
export default React.memo(function CardImage4() {
  return (
    <div className="w-full flex items-center gap-3">
      {/* Icon */}

      <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0" style={{background: "linear-gradient(0deg, #888888 0%, #000000 100%)", width: "42px", height: "42px"}}>
      <svg width="24" height="24" className="absolute inset-0 m-auto text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path>
      </svg>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm">Enhancer</h3>
          <button className="bg-blue-600 text-white px-1.5 pb-0.5 rounded-full text-xs">New</button>
        </div>
        <p className="text-sm text-gray-500 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">Upscale and enhance images and videos up to 22k.</p>
      </div>

      {/* Open button (fixed size) */}
  <button className="cursor-pointer bg-gray-100 dark:bg-zinc-800 text-black dark:text-white rounded-full h-9 w-15 text-xs font-medium shrink-0">
    Open
  </button>

    </div>

  );
});





