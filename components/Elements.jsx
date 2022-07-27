import Image from 'next/image'
import shooting from '../assets/shooting2.jpg'
import rebound2 from '../assets/rebound2.jpg'
import dribbling from '../assets/dribbling.png'
import passing from '../assets/passing.jpg'
import defense from '../assets/defense.jpg'
import React, {useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'

const Elements = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  

  return (
    
    <div className='elements-container p-4 flex items-center justify-center m-auto '>
    
    <div className='elements-content w-full lg:px-28'>
    
      <div className='elements-titles md:mt-16 xl:mb-24' id='elements' data-aos="fade-up">
        <h1 className='text-4xl md:text-6xl xl:text-8xl'>elements of</h1>
        <h1 className='text-3xl md:text-8xl xl:text-9xl'>basketball</h1>
      </div>

      <div className='elements-body flex flex-col gap-16 md:mt-16'>
      <div className='elements-body-content flex flex-col gap-4 items-center justify-center md:flex-row' data-aos="fade-up">
      
      <div className='wrapper1 mt-12 md:mt-0 w-full'>
      <h2 className='elements-title text-5xl mb-4 md:rounded-2xl md:p-6 xl:text-8xl'>shooting</h2>
      <p className='md:border-2 md:border-black md:p-6 md:rounded-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.</p>
      </div>

      <div className='wrapper2 md:mt-2 flex items-center justify-center'>
      <Image src={shooting} className="rounded-xl" alt='ShootingElement'></Image>
      </div>

      </div>

      <div className='elements-body-content flex flex-col gap-4 items-center justify-center md:flex-row-reverse md:items-center' data-aos="fade-up">
      
      <div className='wrapper1 mt-12 md:mt-0 w-full'>
      <h2 className='elements-title text-5xl mb-4 md:rounded-2xl md:p-6 xl:text-8xl'>dribbling</h2>
      <p className='md:border-2 md:border-black md:p-6 md:rounded-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.</p>
      </div>

      <div className='wrapper2 md:mt-2 flex items-center justify-center '>
      <Image src={dribbling} className="rounded-xl" alt='ShootingElement'></Image>
      </div>

      </div>

      <div className='elements-body-content flex flex-col gap-4 items-center justify-center md:flex-row md:items-center' data-aos="fade-up">
      
      <div className='wrapper1 mt-12 md:mt-0 w-full'>
      <h2 className='elements-title text-5xl mb-4 md:rounded-2xl md:p-6 xl:text-8xl'>passing</h2>
      <p className='md:border-2 md:border-black md:p-6 md:rounded-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.</p>
      </div>

      <div className='wrapper2 md:mt-2 flex items-center justify-center'>
      <Image src={passing} className="rounded-xl" alt='ShootingElement'></Image>
      </div>

      </div>

      <div className='elements-body-content flex flex-col gap-4 items-center justify-center md:flex-row-reverse md:items-center' data-aos="fade-up">
      
      <div className='wrapper1 mt-12 md:mt-0 w-full'>
      <h2 className='elements-title text-5xl mb-4 md:rounded-2xl md:p-6 xl:text-8xl'>rebound</h2>
      <p className='md:border-2 md:border-black md:p-6 md:rounded-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.</p>
      </div>

      <div className='wrapper2 md:mt-2 flex items-center justify-center'>
      <Image src={rebound2} className="img rounded-xl" alt='ShootingElement'></Image>
      </div>

      </div>

      <div className='elements-body-content flex flex-col gap-4 items-center justify-center md:flex-row md:items-center' data-aos="fade-up">
      
      <div className='wrapper1 mt-12 md:mt-0 md:w-4/5'>
      <h2 className='elements-title text-5xl mb-4 md:rounded-2xl md:p-6 xl:text-8xl'>defense</h2>
      <p className='md:border-2 md:border-black md:p-6 md:rounded-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor.</p>
      </div>

      <div className='wrapper2 md:mt-2 flex items-center justify-center md:w-4/5'>
      <Image src={defense} className="img rounded-xl" alt='ShootingElement'></Image>
      </div>

      </div>

      </div>

    </div>

    </div>

  )
}

export default Elements