import React from 'react'
import { Earth } from './assets/app'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='h-[700px] relative'>
        <video autoPlay loop muted 
               className=' fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]'
        >
          <source src={Earth} type='video/mp4' />
        </video>
        <Navbar/>
      </div>
    </div>
  )
}

export default App