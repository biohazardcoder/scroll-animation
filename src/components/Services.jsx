import React from 'react'
import { FaReact, FaSpaceShuttle} from 'react-icons/fa'
import { FaSpaceAwesome } from "react-icons/fa6";
import { Wave } from '../assets/app';
function Services() {
    const ServiceData = [
        {
            title: "HST",
            content: "300-1500km",
            description: "Used for astronomical observations, capturing stunning images of the universe.",
            icon: <FaReact className=' text-7xl'/>,
            aosDelay: '300',
        },
        {
            title: "ISS",
            content: "500-1500km",
            description: "It's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
            icon: <FaSpaceShuttle  className=' text-7xl'/>,
            aosDelay: '500',
        },
        {
            title: "GPS",
            content: "300-1500km",
            description: "Part of the Global Positioning System (GPS) used for navigation.",
            icon: <FaSpaceAwesome  className=' text-7xl'/>,
            aosDelay: '700',
        },
    ]
  return (
    <div id='technology' className='container bg-black pb-0 text-white p-[30px] relative z-0'>
        <div className=" min-h-[500px]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 j">
                {ServiceData.map((data, index) => (
                        <div key={index}
                             data-aos="fade-up"
                             data-aos-delay={data.aosDelay}
                             className='min-h-[180px] flex flex-col justify-center items-center bg-sky-900/60 rounded-xl gap-2 backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto'>
                                {data.icon}
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                            <p className='text-sm'>{data.description}</p>
                        </div>
                    ))}
            </div>
            <img src={Wave} alt="" 
                 className='h-[150px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'/>
        </div>
    </div>
  )
}

export default Services