import React from 'react'
import { Moon } from '../assets/app'

function Hero() {
  return (
    <div id='hero' className=' bg-black/20 text-white h-full relative z-50 px-[30px]'>
        <div className=" h-full flex justify-start  items-center  p-4">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className=' space-y-4 lg:pr-36'>
                    <h1 data-aos="fade-up" 
                        className=' uppercase text-5xl font-bold'>Orbite The Earth</h1>
                    <p data-aos="fade-up" 
                       data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea dolorem eius accusamus beatae. Nulla quis beatae quo, possimus tempora similique dignissimos repellat aperiam veniam culpa consequatur repudiandae asperiores saepe.</p>
                    <button data-aos="fade-up" 
                            data-aos-delay="500"
                            className='primary__button'>Learn More...</button>
                </div>
                <div></div>
            </div>
        </div>
        <img src={Moon} alt="" 
             className=' absolute right-0 bottom-0 w-full brightness-50 z-[0]'/>
        <div className=' z-0 absolute bottom-0 right-0 w-full  bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero