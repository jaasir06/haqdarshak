import React from 'react'
import './Location.css'
import BgOuter from '../../components/bgOuter/BgOuter'
import BgInner from '../../components/bgInner/BgInner'
import Dropdown from '../../components/Dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'


const Location = () => {

  const navigate = useNavigate();

  const onNext = () => {
    navigate('/choosestate')
  } 

  const onLast = () => {
    navigate('/phone')
  } 

  const onPrev = () => {
    navigate('/register')
  }

  return (
    <>
        <BgOuter text={"Choose location"} onPrev = {onPrev} />
        <BgInner>
            <div className="map-fields">
              <div onClick={onNext}>
                <Dropdown name={'select state'}/>
              </div>
                <div className="map-hr">
                    <div></div>
                    <h3>OR</h3>
                    <div></div>
                </div>
                <button onClick={onLast}>🧭 use current location</button>
            </div>
        </BgInner>
    </>
  )
}

export default Location