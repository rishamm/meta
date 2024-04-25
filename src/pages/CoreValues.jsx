import React from 'react'
import { MainNavbar } from '../Components/Navbar'

const CoreValues = () => {
  return (
    <div className={`bg-[url('/body_bg.png')]  bg-opacity-25  bg-blue  h-full w-full  overflow-y-auto overflow-x-hidden bg-no-repeat h-screen  `}>
  <MainNavbar/>
    <div className='flex flex-col h-full '>
    <h6 className='text-5xl text-center text-white py-24'>Core Values</h6>
    <p className='text-white xl:px-12 px-4'>
    Adventure: Embrace the spirit of adventure and exploration, encouraging players to journey through fantastical realms, conquer formidable challenges, and uncover hidden treasures together.

Comradery: Foster a sense of camaraderie and teamwork among players, where mutual support, collaboration, and friendship are paramount to success.

Creativity: Celebrate player creativity and ingenuity, providing tools and opportunities for players to express themselves, customize their experiences, and leave their mark on the game world.

Fair Play: Uphold principles of fairness, sportsmanship, and respect in all interactions, ensuring a positive and inclusive gaming environment for players of all skill levels and backgrounds.

Innovation: Drive innovation in gameplay, storytelling, and community engagement, continuously pushing the boundaries to deliver new and exciting experiences that captivate and inspire players
    </p>
    </div>
    </div>
  )
}

export default CoreValues