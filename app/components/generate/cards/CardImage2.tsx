import React from "react";
export default React.memo(function CardImage2() {
  return (
    <div className="w-full flex items-center gap-3">
      
      {/* Icon */}
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

 {/* Text + New badge */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm">Video</h3>
        </div>
        <p className="text-sm text-gray-500 dark:text-zinc-500 dark:hover:text-zinc-400 cursor-pointer">Generate videos with Hailuo, Pika,Runway,Luma,and more.</p>
      </div>

     {/* Open button (fixed size) */}
  <button className="cursor-pointer bg-gray-100 dark:bg-zinc-800 text-black dark:text-white rounded-full h-9 w-15 text-xs font-medium shrink-0">
    Open
  </button>
    </div>
  );
});




