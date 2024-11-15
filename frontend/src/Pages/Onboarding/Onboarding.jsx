import React from 'react'
import './Onboarding.css'
import scheme from '../../assets/img-scheme.png'

const Onboarding = () => {
  return (
    <div className='onboarding'>
        <div className="text">
            <h1>Getting benefits is now easy !</h1>
        </div>

        <div class="loading-box"></div>

        <div className="image">
            <img src={scheme} alt="" />
        </div>
    </div>
  )
}

export default Onboarding