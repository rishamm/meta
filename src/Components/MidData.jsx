import React from 'react'
import usdt from '/123.svg'
import round from '/round.png'
const MidData = () => {
  return (
    <div className=' h-screen flex  items-center ' > 
       <div className='w-full flex   px-4 '>
        <div className='flex flex-col md:flex-row   items-center  gap-22 w-full '>
        <div className='flex  items-center xl:gap-22 gap-2 justify-center md:justify-center w-full h-1/2'>
        <img src={usdt} alt="" className='xl:w-[200px] xl:h-[200px] w-[100px] h-[100px]' />
        <div className=''>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-5xl text-[#B18F62] font-bold sm:text-5xl text-[28px] "> Meta Proton,</h1>
        </div>
        </div>
        <div className={` w-full flex gap-4 flex-col relative justify-center h-[100vh] `}>
          <img src={round} alt="" className='absolute  '/>  
          <h6 className='sm:text-3xl xl:text-5xl text-2xl text-white text-center'>Count Down </h6>
          <h6 className='sm:text-3xl xl:text-5xl  text-2xl text-white text-center'>00:00:00</h6>
        </div>
        </div>
       </div>
    </div>
  )
}

export default MidData