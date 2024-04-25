import React from 'react'
import { MainNavbar } from '../Components/Navbar'

const Profile = () => {
  return (
    <div className='w-full overflow-hidden'>
    <MainNavbar/>
    <section style={{fontFamily: "Montserrat"}} className=" bg-[#071e34] flex font-medium items-start pt-7 justify-center h-screen px-4">

    <section className="w-9/12 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Your-profile</span>
            <span className="text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
            <img src="https://placehold.co/400x400" className="rounded-full w-28 " alt="profile picture" srcSet=""/>
        </div>
        <div className="mt-8  ">
            <h2 className="text-white text-center font-bold text-2xl tracking-wide">Jonathan  Smith</h2>
        </div>
        <p className="text-green-500 text-center font-semibold mt-2.5" >
            Active
        </p>
        <div className="mt-3 text-white text-sm flex flex-col">
            <span className="text-gray-400 text-center font-semibold">Jonathan@gmail.com</span>  
        </div>
        <div className="mt-3 text-white text-sm flex flex-col mb-7">
            <span className="text-gray-400 text-center font-semibold">+91 9048408399</span>    
        </div>
        <div className='text-white gap-7 flex py-7 justify-center'>
       <span className="border cursor-pointer font-thin text-sm px-4 py-1 m-0 rounded-lg" onClick={()=>navigate('/login')}>
                  Edit
                  </span> 
                  <span className="border cursor-pointer text-white font-thin text-sm px-4 py-1 m-0 rounded-lg" onClick={()=>navigate('/login')}>
                   Delete
                  </span> 
       </div>
    </section>


</section>
</div>
  )
}

export default Profile