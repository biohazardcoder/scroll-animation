import React from 'react'
import { Sate1 } from '../assets/app'

function Banner() {
  return (
    <div id='mission' className=' bg-black text-white pt-0 pb-4 px-[30px] z-50'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
                <img data-aos="zoom-in"
                     src={Sate1} alt="" />
            </div>
            <div className=' space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 '>
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
        </div>
    </div>
  )
}

export default Banner