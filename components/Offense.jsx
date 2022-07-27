import shooting from '../assets/shooting.png'
import shooting1 from '../assets/dunk.png'
import Image from 'next/image'
import React, {useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'

const Offense = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  return (
    
    <div className='offense-container overflow-x-hidden' id='offense'>
    
    <div className='offense-content w-full m-auto'>
    
          <div className='offense-title mb-4 p-4 lg:relative lg:float-right lg:w-[1200px] xl:w-[1560px] xl:p-8' data-aos="fade-left">
          <h1 className='text-5xl text-center md:text-8xl lg:text-center xl:text-center 2xl:text-left 2xl:ml-40 2xl:py-10'>offense</h1>
          </div>

          <div className='offense-body p-4 gap-12 w-full max-w-7xl m-auto flex flex-col items-center '>
          
          <div className='offense-wrapper flex flex-col items-center md:flex-row md:gap-12'>
          
          <div className='offense-snippets w-11/12 md:w-80' data-aos="fade-right">
          <p className='capitalize md:text-right mb-8' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat. Proin odio leo, aliquet eu bibendum vel, dictum sit amet sem. Mauris iaculis lacus nec viverra scelerisque.Vestibulum laoreet bibendum pretium. Integer at scelerisque eros. Donec egestas urna lacus, ut sagittis quam vehicula at. Sed ultricies ullamcorper dolor, at venenatis enim tincidunt sed. Vestibulum consectetur sem erat, ut varius lectus pellentesque at. Fusce a aliquet turpis. Fusce eu felis vel quam lacinia dictum nec id nisi. </p>
          </div>

          <div className='offense-logo w-full max-w-sm' data-aos="zoom-in">
          <Image src={shooting} className="w-full max-w-sm" alt="offense" ></Image>
          </div>
          
          </div>

          <div className='offense-wrapper flex flex-col items-center md:flex-row-reverse md:gap-12'>
          
          <div className='offense-snippets w-11/12 md:w-80' data-aos="fade-left">
          <p className='capitalize md:text-left mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat. Proin odio leo, aliquet eu bibendum vel, dictum sit amet sem. Mauris iaculis lacus nec viverra scelerisque.Vestibulum laoreet bibendum pretium. Integer at scelerisque eros. Donec egestas urna lacus, ut sagittis quam vehicula at. Sed ultricies ullamcorper dolor, at venenatis enim tincidunt sed. Vestibulum consectetur sem erat, ut varius lectus pellentesque at. Fusce a aliquet turpis. Fusce eu felis vel quam lacinia dictum nec id nisi. </p>
          </div>

          <div className='offense-logo w-full max-w-sm' data-aos="zoom-in">
          <Image src={shooting1} className="w-full max-w-sm" alt="offense" ></Image>
          </div>
          
          </div>
          
          </div>

    </div>

    </div>

  )
}

export default Offense