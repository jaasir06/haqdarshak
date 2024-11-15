import React from 'react'
import './Radiop.css'

const Radiop = ({val}) => {
  return (
    <div className='radiop'>
      <input type='radio' name='gender'/>{val}
    </div>
  )
}

export default Radiop