import React from 'react'
import './Phone.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Button from '../../components/button/Button'
import Input from '../../components/inputBox/Input'
import { useNavigate } from 'react-router-dom'

const Phone = ({onPrev}) => {

  const navigate = useNavigate();

  const onNext = ()=>{
    navigate('/personal');
  }

  return (
    <>
    <BgOuter text = {"What is your mobile number ?"} onPrev = {onPrev} />
        <BgInner>
            <div className="mobile-input">
                <Input pholder = {'enter your mobile number'}/>
                <p>This is used to create an account in your name on haqdarshak app.</p>
            </div>
            <Button name = {'Next'} onClick={onNext} />
        </BgInner>
    </>
  )
}

export default Phone