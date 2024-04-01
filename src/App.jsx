import React from 'react'
import { Earth } from './assets/app'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  React.useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  })
  return (
    <div className='w-full h-[100vh]'>
      <div className='h-[740px] relative'>
        <video autoPlay loop muted 
               className=' fixed right-0 top-0 h-[740px] w-full object-cover z-[-1]'
        >
          <source src={Earth} type='video/mp4' />
        </video>
        <Navbar/>
        <Hero/>
      </div>

       <Services/>
       <Banner/>
       <Banner2/>
       <Footer/>
    </div>
  )
}

export default App