import React from 'react'
import { Logo } from '../assets/app'

function Navbar() {
  return (
    <nav className=" fixed top-0 right-0 w-full z-50 items-center bg-black/10 backdrop-blur-sm py-4 px-[30px]  sm:py-4 h-auto">
        <div className="flex justify-between">
            <div className="flex items-center gap-4 font-bold text-white text-2xl">
                <img 
                    src={Logo} 
                    alt=""
                    className='w-10 ' />
                <span>JT-SPACE</span>
            </div>
            <div className=' text-white'>
                <ul className=' flex  items-center gap-6 text-xl py-4 sm:py-0'>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Technology</a>
                    </li>
                    <li>
                        <a href="#">Galaxy</a>
                    </li>
                    <li>
                        <a href="#">Satelite</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className='text-white border-2 border-white px-3 py-1 rounded-md'>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar