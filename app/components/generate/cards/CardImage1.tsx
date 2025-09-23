import React from "react";
export default React.memo(function CardImage1() {
  return (
    <div className="w-full flex items-center gap-3">

      {/* icon */}
      <div
        className="relative aspect-square rounded-[10px] block shrink-0"
        style={{
          background: "linear-gradient(0deg, rgb(208, 227, 241) 0%, rgb(41, 73, 98) 100%)",
          width: "44px",
          height: "44px",
        }}
      >
        {/* paste your full SVG markup here (it will render correctly) */}
       

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto text-white"> 
          <path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path>                    <rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect>
          <path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
                            
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="font-medium text-sm">Image</h3>
          <button className="bg-blue-600 text-white px-1.5 pb-0.5 rounded-full text-xs">New</button>
        </div>
        <p className="text-sm text-gray-500">Generate images with custom styles in Flux and Ideogram.</p>
      </div>

      {/* Open button (fixed size) */}
  <button className="cursor-pointer bg-gray-100 text-black rounded-full h-9 w-15 text-xs font-medium shrink-0">
    Open
  </button>
  
    </div>
  );
});




