import { HeadphoneIcon, ImageIcon } from '@/assets'
import React from 'react'


const ActionButtons: React.FC = () => {
  return (
<div className='flex items-center gap-2'>

 {
  ActionBtns.map(({Icon, text})=>( 
<button key={text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
  {<Icon/>}
  <span className="text-sm font-medium">{text}</span>
</button>
  ))
 }

  </div>

  )
}

const ActionBtns: {Icon: React.FC, text: string}[] = [
  {Icon: ImageIcon, text: "Gallery"},
  {Icon: HeadphoneIcon, text: "Support"},
]

export default ActionButtons