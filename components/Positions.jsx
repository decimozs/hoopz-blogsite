import Image from 'next/image'
import icon from '../assets/iconsbball.png'
import PG from '../assets/PG.png'
import SG from '../assets/SG.png'
import SF from '../assets/SF.png'
import PF from '../assets/PF.png'
import CENTER from '../assets/CENTER.png'
import React, {useEffect } from 'react' 
import AOS from 'aos'
import 'aos/dist/aos.css'


const Positions = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);


  return (
    
    <div className='positions-container' id='positions'>
    
    <div className='positions-content w-full m-auto'>
    
          <div className='positions-title mb-4 p-4' data-aos="fade-up">
          <h1 className='text-5xl text-center md:text-8xl lg:text-center 2xl:py-10'>positions</h1>
          </div>

              <div className='positions-wrapper p-4 flex flex-wrap items-center justify-center gap-16 xl:flex-col'>
              
                  <div className='positions-body flex flex-col items-center p-4 w-[350px] lg:w-[410px] xl:w-[1000px] xl:flex-row xl:justify-between gap-6 xl:p-8' data-aos="zoom-in">
                  
                    <div className='card-body xl:flex xl:flex-col xl:gap-4 '>

                      <div className='card-title flex flex-row gap-2 items-center w-full max-w-[100px] mb-6'>
                      <h1 className='font-bold text-3xl'>pg</h1>
                      <Image src={icon} className="w-full" alt='icon'></Image>
                      </div>

                      <div className='card-name flex flex-col items-center w-full xl:max-w-[280px] mb-4'>
                      <h1 className='text-4xl font-black'>point guard</h1>
                      <span className='bars'></span>
                      </div>

                      <div className='card-snippets xl:bg-[#1500ff] xl:rounded-xl'>
                      <p className='xl:p-4 xl:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat.</p>
                      </div>

                    </div>

                      <div className='card-logo w-full items-center flex justify-center xl:relative z-[999] '>
                      <Image src={PG} className="w-full" alt='position' ></Image>
                      </div>

                  </div>

                  <div className='positions-body flex flex-col items-center p-4 w-[350px] lg:w-[410px] xl:w-[1000px] xl:flex-row-reverse xl:justify-between gap-6 xl:p-8' data-aos="zoom-in">
                  
                    <div className='card-body xl:flex xl:flex-col xl:gap-4 '>

                      <div className='card-title flex flex-row gap-2 items-center w-full max-w-[100px] mb-6 xl:ml-auto'>
                      <h1 className='font-bold text-3xl'>sg</h1>
                      <Image src={icon} className="w-full" alt='icon'></Image>
                      </div>

                      <div className='card-name flex flex-col items-center w-full xl:max-w-[360px] mb-4 xl:ml-auto'>
                      <h1 className='text-4xl font-black'>shooting guard</h1>
                      <span className='bars'></span>
                      </div>

                      <div className='card-snippets xl:bg-[#1500ff] xl:rounded-xl'>
                      <p className='xl:p-4 xl:text-white xl:text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat.</p>
                      </div>

                    </div>

                      <div className='card-logo w-full items-center flex justify-center xl:relative z-[999] '>
                      <Image src={SG} className="w-full" alt='position' ></Image>
                      </div>

                  </div>

                  <div className='positions-body flex flex-col items-center p-4 w-[350px] lg:w-[410px] xl:w-[1000px] xl:flex-row xl:justify-between gap-6 xl:p-8' data-aos="zoom-in">
                  
                    <div className='card-body xl:flex xl:flex-col xl:gap-4 '>

                      <div className='card-title flex flex-row gap-2 items-center w-full max-w-[90px] mb-6'>
                      <h1 className='font-bold text-3xl'>sf</h1>
                      <Image src={icon} className="w-full" alt='icon'></Image>
                      </div>

                      <div className='card-name flex flex-col items-center w-full xl:max-w-[355px] mb-4'>
                      <h1 className='text-4xl font-black'>small forward</h1>
                      <span className='bars'></span>
                      </div>

                      <div className='card-snippets xl:bg-[#1500ff] xl:rounded-xl'>
                      <p className='xl:p-4 xl:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat.</p>
                      </div>

                    </div>

                      <div className='card-logo w-full items-center flex justify-center xl:relative z-[999] '>
                      <Image src={SF} className="w-full" alt='position' ></Image>
                      </div>

                  </div>

                  <div className='positions-body flex flex-col items-center p-4 w-[350px] lg:w-[410px] xl:w-[1000px] xl:flex-row-reverse xl:justify-between gap-6 xl:p-8' data-aos="zoom-in">
                  
                    <div className='card-body xl:flex xl:flex-col xl:gap-4 '>

                      <div className='card-title flex flex-row gap-2 items-center w-full max-w-[92px] mb-6 xl:ml-auto'>
                      <h1 className='font-bold text-3xl'>pf</h1>
                      <Image src={icon} className="w-full" alt='icon'></Image>
                      </div>

                      <div className='card-name flex flex-col items-center w-full xl:max-w-[370px] mb-4 xl:ml-auto'>
                      <h1 className='text-4xl font-black'>power forward</h1>
                      <span className='bars'></span>
                      </div>

                      <div className='card-snippets xl:bg-[#1500ff] xl:rounded-xl'>
                      <p className='xl:p-4 xl:text-white xl:text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat.</p>
                      </div>

                    </div>

                      <div className='card-logo w-full items-center flex justify-center xl:relative z-[999] '>
                      <Image src={PF} className="w-full" alt='position' ></Image>
                      </div>

                  </div>

                  <div className='positions-body flex flex-col items-center p-4 w-[350px] lg:w-[410px] xl:w-[1000px] xl:flex-row xl:justify-between gap-6 xl:p-8' data-aos="zoom-in">
                  
                    <div className='card-body xl:flex xl:flex-col xl:gap-4 '>

                      <div className='card-title flex flex-row gap-2 items-center w-full max-w-[75px] mb-6'>
                      <h1 className='font-bold text-3xl'>c</h1>
                      <Image src={icon} className="w-full" alt='icon'></Image>
                      </div>

                      <div className='card-name flex flex-col items-center xl:max-w-[280px] mb-4 mr-auto'>
                      <h1 className='text-4xl font-black'>CENTER</h1>
                      <span className='bars'></span>
                      </div>

                      <div className='card-snippets xl:bg-[#1500ff] xl:rounded-xl'>
                      <p className='xl:p-4 xl:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, tellus ut hendrerit luctus, tortor tortor consequat eros, nec sollicitudin erat quam sed tortor. Aliquam euismod scelerisque volutpat.</p>
                      </div>

                    </div>

                      <div className='card-logo w-full items-center flex justify-center xl:relative z-[999] '>
                      <Image src={CENTER} className="w-full" alt='position' ></Image>
                      </div>

                  </div>

                  

              </div>

    </div>

    </div>

  )
}

export default Positions