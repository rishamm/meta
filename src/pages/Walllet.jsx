import React from 'react'
import { MainNavbar } from '../Components/Navbar'
import Wallet from '../Components/Wallet'

const Walllet = () => {
  return (
    <div className={`w-full bg-[url('/body_bg.png')] h-screen  overflow-hidden`}>
        <MainNavbar/>
        <Wallet/>
    </div>
  )
}

export default Walllet