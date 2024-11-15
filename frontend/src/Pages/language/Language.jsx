import React,{useState, useEffect} from 'react'
import './Language.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Radio from '../../components/radio/radio'
import Button from '../../components/button/Button'
import Onboarding from '../Onboarding/Onboarding'
import { useNavigate } from 'react-router-dom'


const Language = () => {
  
  const [boardingVisible,setBoardingVisible] = useState(true);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setBoardingVisible(false);
    },2000);

    return () => clearTimeout(timer2)
  },[])

  const [btn,setBtn] = useState(false);

  const navigate = useNavigate();
  const onNext = () => {
    navigate('/register')
  }

  if(!boardingVisible)
  return (
    <>
        <BgOuter text={"which language do you prefer"} />
        <BgInner>
            <div className="fields">
                <Radio inp = {'English'} setBtn = {setBtn} btn = {btn}/>
                <Radio inp = {'हिन्दी'} setBtn = {setBtn} btn = {btn}/>
                <Radio inp = {'ಕನ್ನಡ'} setBtn = {setBtn} btn = {btn}/>
            </div>
                <Button name = {'Next'} onClick={onNext} disbled/>
        </BgInner>
    </>
  )

  else 
  return <><Onboarding /></>
}

export default Language