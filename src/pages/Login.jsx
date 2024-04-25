import React from 'react'
import LoginForm from '../Components/LoginForm'
import { MainNavbar } from '../Components/Navbar'
const Login = () => {
  return (
    <div className='w-full overflow-hidden'>
        <MainNavbar/>
        <LoginForm/>
    </div>
  )
}

export default Login