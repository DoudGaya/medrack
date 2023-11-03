import Image from 'next/image'
import React from 'react'
import aboutImage from '@/public/img/black_nurse.png'

export const HomeAbout = () => {
  return (
    <div className=' w-full px-10 lg:px-0 py-20'>
          <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl">
              <div className=" space-y-4">
                  <h2 className='font-quicksand font-bold text-2xl text-primary'>About Medrack</h2>
                  <p className=' font-poppins text-justify text-lg'>
                      Your Friendly Neighborhood Pharmacy
                      Medrack is the Pharmacy that delivers your medicines, the same day, for free – all from your convenience- with automated refills, four free counseling sessions monthly from an assigned care specialist.
                  </p>
                  <div className=" flex flex-col lg:space-x-3 space-y-4 lg:space-y-0 lg:flex-row">
                      <input type="text" placeholder='Check if we deliver to your location' className=' border-2 rounded-md py-2 px-3 w-full' />
                      <button className=' py-3 bg-brand-green rounded-md px-6 flex-none'>Get Started</button>
                  </div>
              </div>
              <div className=" overflow-hidden py-10">
                  <Image src={aboutImage} alt='Medrack ' className=' object-cover h-[400px]' />
              </div>
          </div>      
    </div>
 )
}
