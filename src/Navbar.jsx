import { useState } from 'react'
import './index.css'
import { Link } from "react-scroll";
function Navbar() {
 

  return (
    <div className='w-full top-0 h-15 flex justify-between fixed bg-white z-1'>
      <div className='h-15 w-fit flex items-center flex-row'>  <img className="h-[70%]" src="/logo.png" alt="" />
      <div className='flex flex-col'>
      <h1 className='pl-[15px] text-[#351C15] font-serif font-[100px] text-[24px] pt-[5px] mb-[-5px] h-fit '>Shri Rajesh Kumar Gupta</h1>
      <h2 className='pl-[15px] text-[#351C15] font-serif font-[100px] text-[13px] h-fit '>Director at AIGGPA</h2>
      </div>
      </div>
      <div className=' hidden lg:flex p-[13px] flex gap-4 justify-center content-center  w-auto pr-[35px]'>
        <Link to="Home"
          smooth={true}
          duration={500}><h2 className='cursor-pointer text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>Home</h2></Link>
          <Link to="About"
          smooth={true}
          duration={500}><h2 className='cursor-pointer text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>About</h2></Link>
          <Link to="News"
          smooth={true}
          duration={500}
          offset={-50}><h2 className='cursor-pointer text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>News</h2></Link>
          <Link to="Contact"
          smooth={true}
          duration={500}><h2 className='cursor-pointer text-[#351C15] font-serif text-center font-extralight text-xl p-[2%]'>Contact</h2></Link>
      </div>
    </div>
  )
}

export default Navbar
