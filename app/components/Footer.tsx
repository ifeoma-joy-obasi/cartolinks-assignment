import Image from 'next/image'
import { CardIcon, PaperIcon } from '../../assets/index'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="mt-12 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between items-center'>
            <h2 className='text-[22px] font-semibold m-0 p-0 '>Gallery</h2>

            <div className='flex items-center gap-2'>

                <div className='flex items-center gap-2 cursor-pointer bg-gray-100 dark:bg-zinc-800 rounded-full p-2 hover:bg-gray-200 hover:dark:bg-zinc-700 active:bg-gray-200 active:dark:bg-zinc-700 transform transition-transform duration-500'>
                <PaperIcon className='text-[rgba(19,20,20,0.9)] dark:text-white'/>
                <p>Legal</p>

                </div>

                <div className='flex items-center gap-2 cursor-pointer bg-gray-100 dark:bg-zinc-800 rounded-full p-2 hover:bg-gray-200 hover:dark:bg-zinc-700 active:bg-gray-200 active:dark:bg-zinc-700 transform transition-transform duration-500'>
                <CardIcon className='text-[rgba(19,20,20,0.9)] dark:text-white'/>
                <p>Pricing</p>

                </div>
            </div>

            </div>
            </div>

          

            <footer className='mt-2 flex justify-between items-center text-white bg-[rgba(19,20,20,0.9)] dark:bg-zinc-800 p-5'>
            <div className='flex items-center gap-3'>
              {/* Krea logo */}
              <Image 
                src="https://www.krea.ai/favicon/favicon-64-dark.png" 
                alt="Krea AI" 
                width={40} height={40} 
                className='rounded-md w-6 h-6 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]'
              />
              <h2 className='text-sm md:text-xl lg:text-[35px] font-medium'>Krea AI</h2>
            </div>

  <div className='flex items-center gap-3'>
    <h2 className='text-sm md:text-xl lg:text-[25px] font-medium'>Curated by</h2>
    {/* Mobbin logo */}
    <svg 
      viewBox="0 0 139 64" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg" 
      className="pointer-events-none w-8 h-4 md:w-12 md:h-8 lg:w-[43px] lg:h-20 fill-text-primary"
    >
      <title>Mobbin</title>
      <path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z"></path>
    </svg>
    <h2 className='text-[15px] md:text-[25px] lg:text-[30px] font-medium'>Mobbin</h2>
  </div>
</footer>

    </div>
  )
}

export default Footer