'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, NotificationIcon, SunIcon } from '../../../assets'

const RightIcons: React.FC = () => {
  const [mounted, setMounted] = useState(false)
const {theme, setTheme}=useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <button className="p-2 rounded-lg bg-gray-100 dark:dark:bg-zinc-800 hover:bg-gray-200 dark:hover:dark:bg-zinc-700 cursor-pointer">
        <NotificationIcon />
      </button>

      {/* theme button */}
      <button
        onClick={() => setTheme(theme === 'light' ? "dark" : "light")}
        
        className="group p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors duration-300"
      >
       {theme === 'light' ? <SunIcon />:<MoonIcon className='dark:text-gray-200 dark:group-hover:text-white transition-colors duration-300'/> }
      </button>

      {/* Gradient user circle */}
      <div className="p-[2px] rounded-xl bg-gray-100 dark:dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-blue-100" />
      </div>
      
    </div>
  )
}

export default RightIcons