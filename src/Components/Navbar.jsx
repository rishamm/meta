import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import logo from "/logo/logo-meta.png";
import log2 from "/logo/name.png";
import cross from "/cross.svg";
import { useNavigate } from "react-router-dom";
export function MainNavbar() {
const navigate=useNavigate(false)
const [open ,setOpen]=useState()

  return (
    <div className="bg-transparent shadow-sm h-[60px] h-scree relative">
      <div className=" xl:mx-2  h-full w-full">
        <div className=" text-white justify-between flex w-full  h-full">
          <div className="flex items-center w-full h-full">
            <div className="flex items-center  h-full">
             <a href="/" className="flex items-center  h-full">
             <img src={logo} className="h-[40px] w-[40px] " />
              <img src={log2} className="h-[55px] w-[110px] " />
             </a>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className=" xl:flex hidden  flex-row  gap-12 justify-end   items-center h-full">
              <a href="/">
                <span className="font-thin text-sm">Home</span>
              </a>
              <a href="/refferals">
                <span className="font-thin text-sm">Refferals</span>
              </a>
              <a href="/wallet">
                <span className="font-thin text-sm">Wallet</span>
              </a>
              {/* <a href="/profile">
                <span className="font-thin text-sm">Profile</span>
              </a> */}
            </div>
            <div className=" flex flex-col  justify-center  items-center h-full px-1">
              <div className="xl:hidden flex flex-col justify-center  items-center h-full px-1">
         <div className="flex flex-col gap-1 " onClick={()=>setOpen(true)}>
         { !open&& <span className="h-[3px] bg-[#B18F62] w-[30px] rounded-lg"></span>}
            {! open&&  <span className="h-[3px] bg-[#B18F62] w-[30px] rounded-lg"></span>}
             { !open&&  <span className="h-[3px] bg-[#B18F62] w-[30px] rounded-lg"></span>}
         </div>
           {open&&<svg xmlns="http://www.w3.org/2000/svg" className="w-1/2 h-1/2" width="55" height="55" viewBox="0 0 55 55" fill="#B18F62"  onClick={()=>setOpen(false)}>
<path d="M30.9655 27.161L53.9655 4.16098C54.39 3.6835 54.6155 3.06164 54.5959 2.42307C54.5762 1.78451 54.3128 1.1777 53.8598 0.727233C53.4068 0.276767 52.7985 0.0168293 52.1598 0.000788921C51.5212 -0.0152515 50.9006 0.213823 50.4255 0.640979L27.4255 23.641L4.42553 0.640979C3.94606 0.243946 3.33571 0.0400795 2.71388 0.069257C2.09205 0.0984345 1.50348 0.358557 1.06329 0.798742C0.623106 1.23893 0.362984 1.8275 0.333806 2.44933C0.304629 3.07116 0.508496 3.68151 0.905528 4.16098L23.9055 27.161L0.905528 50.161C0.637462 50.383 0.418699 50.6585 0.263242 50.9699C0.107785 51.2813 0.0190606 51.6217 0.00274775 51.9693C-0.0135651 52.317 0.042892 52.6642 0.168508 52.9888C0.294124 53.3134 0.486129 53.6082 0.732232 53.8543C0.978335 54.1004 1.27311 54.2924 1.5977 54.418C1.92228 54.5436 2.26952 54.6001 2.61718 54.5838C2.96484 54.5675 3.30526 54.4787 3.61665 54.3233C3.92805 54.1678 4.20355 53.949 4.42553 53.681L27.4255 30.681L50.4255 53.681C50.905 54.078 51.5153 54.2819 52.1372 54.2527C52.759 54.2235 53.3476 53.9634 53.7878 53.5232C54.228 53.083 54.4881 52.4945 54.5173 51.8726C54.5464 51.2508 54.3426 50.6404 53.9455 50.161L30.9655 27.161Z" fill="#B18F62"/>
</svg>}
              </div>
              <div className="xl:block  hidden px-5 " >
                {/* <span className="border cursor-pointer font-thin text-sm px-4 py-1 m-0 rounded-lg" onClick={()=>navigate('/login')}>
                  Login
                  </span>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
     { open&&<div className=" absolute text-white  right-0">
      <div className=" flex   flex-col gap-5 items-end  pr-7  h-full">
              <a href="/">
                <span className="font-medium text-md">Home</span>
              </a>
              <a href="/refferals">
                <span className="font-mediumtext-md">Refferals</span>
              </a>
              <a href="/wallet">
                <span className="font-medium text-md">Wallet</span>
              </a>
              {/* <a href="/profile">
                <span className="font-thin text-sm">Profile</span>
              </a> */}
            </div>
      </div>}
    </div>
  );
}
