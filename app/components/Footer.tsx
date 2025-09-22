import Image from 'next/image'
import { CardIcon, PaperIcon } from '../../assets/index'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="mt-12 max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between items-center'>
            <h2 className='text-[22px] font-semibold m-0 p-0'>Gallery</h2>

            <div className='flex items-center gap-2'>

                <div className='flex items-center gap-2 cursor-pointer bg-gray-100 rounded-full p-2 '>
                <PaperIcon className='text-[rgba(19,20,20,0.9)]'/>
                <p>Legal</p>

                </div>

                <div className='flex items-center gap-2 cursor-pointer bg-gray-100 rounded-full p-2 '>
                <CardIcon className='text-[rgba(19,20,20,0.9)]'/>
                <p>Pricing</p>

                </div>
            </div>

            </div>
            </div>

            <footer className='mt-2 flex justify-between items-center text-white bg-[rgba(19,20,20,0.9)] p-5'>
              <div className='flex items-center gap-3'>
                <Image src="https://www.krea.ai/favicon/favicon-64-dark.png" alt="Krea AI" width={50} height={50} className='rounded-md'/>
                <h2 className='text-[20px] lg:text-[35px] md:text-[28px] font-medium'>Krea AI</h2>
              </div>
              <div className='flex items-center gap-3'>
               <h2 className='text-[20px] lg:text-[25px] font-medium'>Curated by</h2>
                <svg width="139" height="64" viewBox="0 0 139 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none h-20 w-[43px] fill-text-primary" data-sentry-element="svg" data-sentry-source-file="MobbinLogo.tsx" data-sentry-component="MobbinLogo"><title>Mobbin</title><path d="M84.3504 64H48.1695V47.315L32.569 63.9989L0 63.9841V29.9515L28.31 0H67.4439V15.9214L82.6881 0H116.593V26.1874H139V64H99.1163V48.208L84.3504 64Z" data-sentry-element="path" data-sentry-source-file="MobbinLogo.tsx"></path></svg>
                <h2 className='text-[20px] md:text-[28px] lg:text-[35px] font-medium'>Mobbin</h2>
              </div>
            </footer>
    </div>
  )
}

export default Footer