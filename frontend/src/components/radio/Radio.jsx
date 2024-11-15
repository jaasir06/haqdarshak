import React from 'react'
import './Radio.css'

const Radio = ({inp,value,setSelect}) => {
  return (
    <div className="input-fields">
        <label htmlFor="">
        <input type="radio" name='language' onClick={()=>{setSelect(value)}} />{inp}
        </label>
    </div>
  )
}

export default Radio