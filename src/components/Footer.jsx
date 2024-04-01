import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { MdCall, MdMessage } from "react-icons/md";

function Footer() {
  return (
    <div className=' bg-gray-800 text-white p-10'>
        <section className=' max-w-[1200px] mx-auto text-white '>
            <div className='grid md:grid-cols-3 py-5'>
                <div className='first'>
                    <h1 className=' text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3'>Be Ready To Grow</h1>
                    <p>Get Exclusive <span className='font-bold'>Updatestraigt</span> to your inbox.</p>
                    <br />
                    <div className=' flex items-center h-10'>
                        <input type="text"
                               className=' py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 '
                               placeholder='Email' />
                        <button className='primary__button'>OK</button>
                    </div>
                </div>
                <div className="second grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className=" py-8 px-4">
                            <h1 className='text-xl font-bold mb-3'>Quick Links</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <a href="#">Galaxy</a>
                                </li>
                                <li>
                                    <a href="#technology">Technology</a>
                                </li>
                                <li>
                                    <a href="#mission">Mission</a>
                                </li>
                                <li>
                                    <a href="#satelite">Satelite</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className=" py-8 px-4">
                            <h1 className='text-xl font-bold mb-3'>Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                <li>
                                    <a href="#">Galaxy</a>
                                </li>
                                <li>
                                    <a href="#technology">Technology</a>
                                </li>
                                <li>
                                    <a href="#mission">Mission</a>
                                </li>
                                <li>
                                    <a href="#satelite">Satelite</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-8 px-4'>
                        <div>
                            <h1 className=' text-xl font-bold mb-3'>Contact Us</h1>
                        </div>
                        <div className=' flex flex-col gap-3 '>
                            <div className=' flex items-center gap-2'>
                                <FaLocationDot />
                                <p>Namangan, Uzbekistan</p>
                            </div>
                            <div className=' flex items-center gap-2'>
                                <MdMessage  />
                                <p>empty@gmail.com</p>
                            </div>
                            <div className=' flex items-center gap-2'>
                                <MdCall />
                                <p>+998 98 7654321</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' hidden sm:block border-t-2 bt-white py-8'>
                <div className=' flex justify-between'>
                    <span className=' text-sm text-gray-400'>copyright © 2024 by JT</span>
                    <span className=' text-sm text-gray-400'>Privacy Policy <span className='ml-2'> </span>   Terms & Conditions</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer