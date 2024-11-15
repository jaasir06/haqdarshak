import React, { useEffect } from 'react'
import Language from './Pages/language/Language'
import Register from './Pages/Registration/Register'
import Phone from './Pages/Phone/Phone'
import ChooseState from './Pages/ChooseState/ChooseState'
import { useState } from 'react'
import Location from './Pages/location/Location'
import Splash from './Pages/splashscreen/Splash'
import Personal from './Pages/Personal/Personal'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'


const App = () => {

  const [splashVisible,setSplashVisible] = useState(true);


  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSplashVisible(false);
    },2000);

    return () => clearTimeout(timer1)
  },[])



  if (!splashVisible)
  return (
    <>
    <Routes>
    <Route path='/' element={<Language/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/location' element={<Location/>}/>
    <Route path='/choosestate' element={<ChooseState/>}/>
    <Route path='/phone' element={<Phone/>}/>
    <Route path='/personal' element={<Personal/>}/>
    <Route path='/home' element={<Home />}/>
    </Routes>
    </>

  )
  else
  return <><Splash/></>
}

export default App