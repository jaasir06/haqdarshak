import React, { useState } from 'react'
import './Register.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Radio from '../../components/radio/radio'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [select, setSelect] = useState();

  const navigate = useNavigate();
  const onNext = () => {
    navigate(select)
  }

  const onPrev = () => {
    navigate('/')
  }

  return (
    <>
        <BgOuter text={"How do you want to login ?"} onPrev={onPrev} />
        <BgInner>
            <div className="fields">
                <Radio inp = {'Register me as new user'} value={'/location'} setSelect={setSelect}/>
                <Radio inp = {'Use my phone Number'} value={'/phone'} setSelect={setSelect}/>
                <Radio inp = {'Use my Yojana Card'} value={'/personal'} setSelect={setSelect}/>
            </div>
                <Button name = {'Next'} onClick={onNext} />
        </BgInner>
    </>
  )
}

export default Register