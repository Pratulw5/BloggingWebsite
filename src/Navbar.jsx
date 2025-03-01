import { useState } from 'react'
import './index.css'

function Navbar() {
 

  return (
    <div className='w-full h-15 flex justify-between sticky'>
      <h1 className='pl-[15px] text-[#351C15] font-serif font-[100px] text-[28px] p-[10px]'>Shri Rajesh Kumar Gupta</h1>
      <div className=' p-[13px] flex gap-4 justify-center content-center  w-auto pr-[35px]'>
        <h2 className='text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>Home</h2>
        <h2 className='text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>Contact</h2>
        <h2 className='text-[#351C15] font-serif  text-center font-extralight text-xl p-[2%]'>News</h2>
      </div>
    </div>
  )
}

export default Navbar
