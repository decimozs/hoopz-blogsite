import React from 'react'
import Link from 'next/link'

const About = () => {

  return (
    
    <div className='about w-full m-auto'>
    
    <div className='navbar-container m-auto'>
    
    <div className='navbar-content p-4 flex justify-between items-center lg:p-4 lg:px-8'>
    
        <div className='navbar-logo'>
        <Link href="/">
          <a><h1 className='webname text-4xl'>hoopz</h1></a>
        </Link>
        </div>

        <div className='navbar-links md:flex'>
        <ul className='flex flex-row gap-12 items-center md:gap-4 lg:gap-12'>
          <li>
              <Link href="/About">
              <button className='navbar-btn '>
              <a className='text-white md:text-sm lg:text-xl'>about</a>
              </button>
              </Link>
          </li>
        </ul>
      </div>

    </div>

    </div>

    <div className='about-container w-full flex items-center justify-center flex-col  '>

    <div className='about-content p-6 max-w-5xl flex items-center justify-center flex-col w-full '>
    
    <div className='section-title w-full '>
    <h1 className='text-7xl font-black mb-6'>about</h1>
    </div>

    <div className='section-snippets w-full'>
    <p className='text-lg font-semibold mb-8'>THIS WEBSITE IS A BASKETBALL BLOG SITE FOR THE PEOPLE WHO LOVE PLAYING BASKETBALL. THIS WEBSITE CONTAINS BRIEF INFORMATION ON BASKETBALL IN TERMS OF ITS PLAYING ELEMENTS, POSITIONS OR ROLES OF THE PLAYERS AND SOME BEAUTIFUL REMINDERS FROM OUR IDOLS IN BASKETBALL HISTORY.</p>
    </div>

    <div className='website-reminder p-4'>
    <h1 className='text-2xl font-black text-center'>for educational purposes only</h1>
    </div>
    
    </div>
    </div>
    </div>
    

  )
}

export default About