import React from 'react'
import './BgOuter.css'
import {IoIosArrowRoundBack} from "react-icons/io"

const BgOuter = ({text,onPrev}) => {
  return (
    <div className="onboarding">
        <div className="bg-outer">
            <button onClick={onPrev}><IoIosArrowRoundBack size={30}/></button>
            <center>
            <h1>{text}</h1>
            </center>
        </div>
    </div>
  )
}


export default BgOuter