import React from "react";
import { MainNavbar } from "../Components/Navbar";
import Login from "../Components/LoginForm";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import bg from '/body_bg.png'

import MidData from "../Components/MidData";
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div className={`bg-[url('/body_bg.png')]  bg-opacity-25  bg-blue  h-full w-full  overflow-y-auto overflow-x-hidden bg-no-repeat`}>
      <Banner />
      <MainNavbar />
      <MidData/>
    
      <div className="sm:px-12  px-3 flex  pb-12">
      <Cards/>
      </div>
    
      <div className="w-full py-2 px-12 sm:h-[800px]  sm:py-28 py-20 gap-7  grid lg:grid-cols-2 lg:grid-rows-none    md:grid-cols-none   md:grid-rows-2">
      <div className={` flex items-center justify-center `}>
          <img className="w-1/2" src="/Group48.svg" alt="" />
        </div>
        <div className="w-full h-full">
        <div className="flex w-full gap-4 h-14 my-5 ">
       <div className="flex justify-center items-start h-full">
       <img className="w-15 h-14  py-2" src="/team3.png" alt="" />
       </div>
      <div>    <h6 className="text-[#B18F62] text-start font-light text-    ">AFFILIATE </h6>
        <h6 className="text-[#B18F62] text-start font-bold text-3xl  pb-5 "> PROGRAM</h6></div>
        </div>
    
         <div className={`bg-[url('/border.png')] bg-no-repeat w-90 h-56 `}>
           <p className=" p-2 text-[#B18F62]  sm:text-[16px] text-[14px] ">
             
           Join our referral program today and start sharing the love while earning rewards along the way. Together, let's make our community even stronger!
              
           </p>
         </div>
        </div>
      </div>
      
      <div className="w-full py-2 px-12 sm:h-[800px]  sm:py-28 py-20 gap-0 sm:gap-7  grid lg:grid-cols-2 lg:grid-rows-none    md:grid-cols-none   md:grid-rows-2">
      
        <div className="w-full h-full">
        <div className="flex w-full gap-4 h-14 my-5 ">
       <div className="flex justify-center items-start h-full">
       <img className="w-15 h-14  py-2" src="/team3.png" alt="" />
       </div>
      <div>    <h6 className="text-[#B18F62] text-start font-light text-    ">ABOUT </h6>
        <h6 className="text-[#B18F62] text-start font-bold text-3xl  pb-5 "> OUR TEAM</h6></div>
        </div>
    
         <div className={`bg-[url('/border.png')] bg-no-repeat w-90 h-56 `}>
           <p className=" p-2 text-[#B18F62] sm:text-[16px] text-[14px] ">
             
           Join our referral program today and start sharing the love while earning rewards along the way. Together, let's make our community even stronger!
              
           </p>
         </div>
        </div>
        <div className={` flex items-start sm:pt-20 justify-center `}>
          <img className="w-1/4" src="/Group211.svg" alt="" />
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default Home;
