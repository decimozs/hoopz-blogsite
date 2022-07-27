import React from 'react'
import Image from 'next/image'
import nextjs from '../assets/nextjs.png'
import react from '../assets/react.png'
import sass from '../assets/sass.png'
import tailwind from '../assets/tailwind.png'

const Footer = () => {
  return (
    
    <div className='footer-container flex items center justify-center w-full'>
    <div className='footer-content flex items-center justify-center flex-col gap-2'>
    
    <h3 className='text-3xl text-white font-black '>made with</h3>

    <div className='tech-used flex items-center flex-row justify-center w-full'>
    
    <Image src={nextjs} alt="tech" className='w-full'></Image>
    <Image src={react} alt="tech" className=''></Image>
    <Image src={sass} alt="tech" className=''></Image>
    <Image src={tailwind} alt="tech" className=''></Image>

    </div>
    
    <p className='text-center text-white'>design and built by marlon martin</p>

    </div>
    </div>

  )
}

export default Footer