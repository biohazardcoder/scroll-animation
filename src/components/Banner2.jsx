import React from 'react'
import { Sate2 } from '../assets/app'

function Banner2() {
  return (
    <div className=' bg-black text-white pb-12 px-[30px] z-50'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className=' space-y-3 xl:pr-36 p-8 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 '>
                <p className='text-sky-800 uppercase'>Our Mission</p>
                <h1 className=' uppercase text-5xl'>RAPIDCAST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.</p>
                <button className='primary__button'>Learn More</button>
            </div>
            <div>
                <img src={Sate2} alt=""  className=' object-cover w-[550px] h-full ml-32'/>
            </div>
        </div>
    </div>
  )
}

export default Banner2;