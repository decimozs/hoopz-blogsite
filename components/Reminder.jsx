import React from 'react'
import Image from 'next/image'
import avatar1 from '../assets/idol1.png'
import avatar2 from '../assets/idol2.png'
import avatar3 from '../assets/idol3.png'

const Reminder = () => {
  return (
    
    <div className='reminder-container m-auto'>
    
    <div className='reminder-content flex flex-col items-center justify-center p-4'>
    
      <div className='reminder-title text-center mb-16'>
      <h1 className='text-5xl md:text-7xl xl:text-8xl font-black'>bear in mind</h1>
      <h1 className='text-lg md:text-5xl xl:text-5xl font-bold'>when playing basketball</h1>
      </div>

      <div className='reminder-body flex flex-col gap-12 items-center justify-center'>
          
              <div className='reminder-body-content-1 p-4 md:flex md:flex-row md:p-8 md:gap-12 md:justify-center md:items-center'>
              <div className='content-logo w-[150px] md:w-[250px]'>
              <Image src={avatar1} alt="" className='w-full' ></Image>
              </div>
              <div className='content-snippets mt-4'>
              <p className="">&#34;NO MATTER HOW DIFFICULT THE CHALLENGE IS, ALWAYS STAY POSITIVE AND BELIEVE IN YOURSELF.&#34;</p>
              <h1 className='text-2xl font-black mt-4 md:text-right'>-kobe bryant</h1>
              </div>
              </div>

              <div className='reminder-body-content-2 p-4 md:flex md:flex-row md:p-8 md:gap-12 md:justify-center md:items-center'>
              <div className='content-logo w-[150px] md:w-[210px]'>
              <Image src={avatar2} alt="" className='w-full' ></Image>
              </div>
              <div className='content-snippets mt-4'>
              <p className="">&#34;TALENT WIN GAMES, BUT TEAMWORK AND INTELLIGENCE WIN CHAMPIONSHIPS.&#34;</p>
              <h1 className='text-2xl font-black mt-4 md:text-right'>-michael jordan</h1>
              </div>
              </div>

              <div className='reminder-body-content-3 p-4 md:flex md:flex-row md:p-8 md:gap-12 md:justify-center md:items-center'>
              <div className='content-logo w-[150px] md:w-[320px]'>
              <Image src={avatar3} alt="" className='w-full' ></Image>
              </div>
              <div className='content-snippets mt-4'>
              <p className="">&#34;THE MOST IMPORTANT MEASURE OF HOW GOOD A GAME I PLAYED WAS HOW MUCH BETTER I’D MADE MY TEAMMATES PLAY.&#34;</p>
              <h1 className='text-2xl font-black mt-4 md:text-right'>-bill russel</h1>
              </div>
              </div>

      </div>

    </div>

    </div>

  )
}

export default Reminder