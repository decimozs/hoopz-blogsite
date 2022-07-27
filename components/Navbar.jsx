
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css' 

const Navbar = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    
    <div className='navbar-container fixed  z-[999]' id='top'>
    
    <div className='navbar-content p-4 flex justify-between items-center lg:p-4 lg:px-8 ease-in duration-300 '  style={{ backgroundColor: `${color}` }} >
    
        <div className='navbar-logo' data-aos="zoom-in">
        <Link href="/">
          <a><h1 className='webname text-4xl'>hoopz</h1></a>
        </Link>
        </div>
      <div className='navbar-links md:flex'>
        <ul className='flex flex-row gap-12 items-center md:gap-4 lg:gap-12'>
          <li>
              <Link href="/About">
              <button className='navbar-btn ' data-aos="zoom-in">
              <a className='text-white md:text-sm lg:text-xl'>about</a>
              </button>
              </Link>
          </li>
        </ul>
      </div>
    </div>

    </div>

  )
}

export default Navbar