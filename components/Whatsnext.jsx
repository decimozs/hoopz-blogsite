import React, {useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

const Whatsnext = () => {

  useEffect(() => {
    AOS.init({duration: 500})
  }, []);

  return (
    
    <div className='whatsnext-container m-auto'>
    
    <div className='whatsnetx-content text-center p-4 flex flex-col items-center justify-center gap-12'>
    
    <div className='content-title'>
    <h1 className='font-black text-5xl md:text-7xl'>what&#39;s next?</h1>
    </div>

    <div className='content-snippets
    '>
    <p className='font-bold text-2xl md:text-4xl'>go outside call your friends and</p>
    </div>

    <Link href={'#top'}>
    <button className='play-button md:py-10  lg:rounded-[150px]' data-aos="fade-up">
    <a className='font-black text-2xl md:text-6xl' >play basketball</a>
    </button>
    </Link>

    </div>

    </div>

  )
}

export default Whatsnext