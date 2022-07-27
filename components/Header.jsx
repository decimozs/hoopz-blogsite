import React, {useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import indicator from '../assets/indicator.png'

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  

  return (
    
    <div className='header-container flex justify-center items-center flex-col w-full'>
    
    <div className='header-content flex items-center justify-center m-auto'>
    
    <div className='header-title text-right w-full'>
    <h1 className='white text-4xl md:text-7xl xl:text-8xl' data-aos="fade-right">this is</h1>
    <h1 className='orange text-4xl md:text-8xl xl:text-9xl' data-aos="fade-left">basketball</h1>
    </div>

    </div>

    <div className='navbar-indicator animate-bounce'>
    <Image src={indicator} className=""></Image>
    </div>

    </div>

  )
}

export default Header