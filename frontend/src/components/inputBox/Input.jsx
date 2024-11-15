import React from 'react'
import './Input.css'

const Input = ({pholder}) => {
  return (
    <div className='input-box'>
        <input type="text" placeholder={pholder} />
    </div>
  )
}

export default Input