import React from 'react'
import { Sate2 } from '../assets/app'

function Banner2() {
  return (
    <div id='satelite' className='  bg-black text-white pb-8 px-[30px] z-50'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className=' space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 '>
                <p data-aos="fade-up"
                   className='text-sky-800 uppercase'>Our Mission</p>
                <h1 data-aos="fade-up"
                    data-aos-delay="300"
                    className=' uppercase text-5xl'>RAPIDCAST</h1>
                <p data-aos="fade-up"
                   data-aos-delay="500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque. Consequatur consectetur quisquam qui sunt.</p>
                <button data-aos="fade-up"
                        data-aos-delay="700"
                        className='primary__button'>Learn More</button>
            </div>
            <div>
                <img data-aos="zoom-in"    
                     src={Sate2} alt=""  className=' object-cover w-[550px] h-full md:ml-32'/>
            </div>
        </div>
    </div>
  )
}

export default Banner2;