import React, { useState } from 'react'
import { MainNavbar } from '../Components/Navbar'
import { Typography, Button } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
const Refferals = () => {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);
  return (
    <div className={`bg-[url('/body_bg.png')]  w-full overflow-hidden h-screen `}>
    <MainNavbar/>
    {/* <section style={{fontFamily: "Montserrat"}} className=" bg-trnasparent flex font-medium items-start pt-7 justify-center h-screen px-4">

<section className="w-9/12 mx-auto border  rounded-2xl px-8 py-6 shadow-lg">
    <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm">your-refferals</span>
        <span className="text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        </span>
    </div>
    
    <div className="mt-2  ">
        <h2 className="text-white text-center font-bold text-2xl tracking-wide">Jonathan  Smith</h2>
    </div>
    <div className="text-white pt-3 text-sm flex flex-col">
        <span className="text-gray-400 text-center font-semibold">your referal code</span>  
       <div  className='w-98 flex self-center py-3'>
       <Button
      onMouseLeave={() => setCopied(false)}
      onClick={() => {
        copy("npm i @material-tailwind/react");
        setCopied(true);
      }}
      className="flex items-center gap-x-3 px-4 py-2.5 lowercase"
    >
      <Typography
        className="border-r border-gray-400/50 pr-3 font-normal"
        variant="small"
      >
       meta-proton/4455-555/jonathan
      </Typography>
      {copied ? (
        <CheckIcon className="h-4 w-4 text-white" />
      ) : (
        <DocumentDuplicateIcon className="h-4 w-4 text-white" />
      )}
    </Button>
       </div>
    </div>
 
   <div className="table-fixed border-[1px]  border-solid rounded-2xl">
<table className="w-full">
            <thead className="">
              <tr>
       
                  <th
                  className={`border-b-[1px] border-x-[0px] border-solid sm:pt-10 sm:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px] `}
                  style={{ color: "#fff" }}
                  
                >
                 Name
                  </th>
                  <th
                  className={`border-b-[1px] border-x-[1px] border-solid sm:pt-10 sm:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px] `}
                  style={{ color: "#fff" }}
                  
                >
                 Level
                  </th>
                  <th
                  className={`border-b-[1px] border-x-[0px] border-solid sm:pt-10 sm:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px] `}
                  style={{ color: "#fff" }}
                  
                >
                Income
                  </th>
                
              </tr>
            </thead>
            <tbody>
            
                <tr className="pt-10 font-light text-white" >
                  <td className="   border-solid md:px-[40px] px-1 sm:px-4 pt-2 pb-1 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                 Tommy
                  </td>
                  <td className=" border-x-[1px] border-solid pt-2 pb-1 md:px-[20px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                Level 3
                  </td>
                  <td className=" border-x-[0px] border-solid pt-2 pb-1 md:px-[40px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                   $0.5
                  </td>
                 
                </tr>
                <tr className="pt-10 font-light text-white" >
                  <td className="   border-solid md:px-[40px] px-1 sm:px-4 pt-2 pb-1 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                 Tommy
                  </td>
                  <td className=" border-x-[1px] border-solid pt-2 pb-1 md:px-[20px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                Level 3
                  </td>
                  <td className=" border-x-[0px] border-solid pt-2 pb-1 md:px-[40px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                   $0.5
                  </td>
                 
                </tr> 
                <tr className="pt-10 font-light text-white" >
                  <td className="   border-solid md:px-[40px] px-1 sm:px-4 pt-2 pb-1 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                 Tommy
                  </td>
                  <td className=" border-x-[1px] border-solid pt-2 pb-1 md:px-[20px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                Level 3
                  </td>
                  <td className=" border-x-[0px] border-solid pt-2 pb-1 md:px-[40px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                   $0.5
                  </td>
                 
                </tr>
                <tr className="pt-10 font-light text-white" >
                  <td className="   border-solid md:px-[40px] px-1 sm:px-4 pt-2 pb-1 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                 Tommy
                  </td>
                  <td className=" border-x-[1px] border-solid pt-2 pb-1 md:px-[20px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                Level 3
                  </td>
                  <td className=" border-x-[0px] border-solid pt-2 pb-1 md:px-[40px] px-1 sm:px-4 sm:pb-4 sm:pt-4  lg:pt-6 lg:pb-6 lg:text-base md:text-xs sm:text-[10px] text-[7px]">
                   $0.5
                  </td>
                 
                </tr>
            </tbody>
          </table>
        </div>
</section>


</section> */}
<div className='flex w-full h-full items-center  justify-center'>

<div className=''>
<h4 className='text-6xl w-[100px]  animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-1md:text-5xl text-[26px] text-black font-bold sm:text-5xl text-[28px]  text-center text-white '>Coming Soon ....</h4>

</div>
</div>
</div>
  )
}

export default Refferals