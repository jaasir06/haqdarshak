import React from 'react'
import './Personal.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Button from '../../components/button/Button'
import Input from '../../components/inputBox/Input'
import Radiop from '../../components/Radio1/Radiop'
import { useNavigate } from 'react-router-dom'

const Personal = () => {

    const navigate = useNavigate();

    const onPrev = () => {
        navigate('/register')
    }

    const onNext = () => {
        navigate('/home')
    }


  return (
    <>
        <BgOuter text={"Personal Details"} onPrev={onPrev} />
        <BgInner>
            <div className="details">
                <h3>Name</h3>
                <Input pholder={'Enter your name'}/>
                <h3>Gender</h3>
                <div className="gen-field">
                    <Radiop val = {"male"}/>
                    <Radiop val={'female'} />
                    <Radiop val={'other'} />
                </div>
                <h3>DOB/Age</h3>
                <div className="dob">
                    <input className='dob-date' type='date' placeholder='Enter your Birthday'/>
                    <p>OR</p>
                    <input className='dob-age' type='number' placeholder='Age'/>
                </div>
                <p>This information helps us suggest schemes that are right for you</p>
                <Button name = {'Next'} onClick={onNext} />
            </div>
        </BgInner>
    </>
  )
}

export default Personal