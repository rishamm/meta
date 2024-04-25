import React from 'react'
import { MainNavbar } from '../Components/Navbar'

const Goals = () => {
  return (
    <div className={`bg-[url('/body_bg.png')]  bg-opacity-25  bg-blue  h-full w-full  overflow-y-auto overflow-x-hidden bg-no-repeat h-screen  `}>
    <MainNavbar/>
      <div className='flex flex-col h-full '>
      <h6 className='text-5xl text-center text-white py-24'>Long Term Goals</h6>
      <p className='text-white xl:px-12 px-4'>
      Build a thriving and tightly-knit gaming community with millions of passionate players worldwide.
Expand the game universe with regular updates, expansions, and user-generated content, keeping players engaged and excited for new adventures.
Host esports tournaments, events, and community gatherings that bring players together to compete, collaborate, and celebrate their shared love for Meta proton.
Cultivate a supportive and inclusive community culture that values diversity, creativity, and mutual respect, setting a positive example for the broader gaming industry.
Partner with content creators, influencers, and gaming organizations to amplify the reach and impact of the Meta proton community, driving growth and engagement across various platforms.
      </p>
      </div>
      </div>
  )
}

export default Goals