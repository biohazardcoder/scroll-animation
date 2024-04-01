import React from 'react'
import { Logo } from '../assets/app'

function Navbar() {
  return (
    <nav className=" fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="flex">
            <div className="flex">
                <img src={Logo} alt="" />
            </div>
            <div className=' text-white'>
                <ul>
                    <li>
                        <a href="#">About</a>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar