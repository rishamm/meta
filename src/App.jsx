import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Walllet from './pages/Walllet';
import Refferals from './pages/Refferals';
import Goals from './pages/Goals';
import OurVision from './pages/OurVision';
import CoreValues from './pages/CoreValues';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/wallet' element={<Walllet/>}/>
        <Route path='/refferals' element={<Refferals/>}/>
        <Route path='/refferals' element={<Refferals/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/ourvision' element={<OurVision/>}/>
        <Route path='/corevalues' element={<CoreValues/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
