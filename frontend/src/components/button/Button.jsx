import React from 'react'
import './Button.css'

const Button = ({name, onClick}) => {
  return (
    <div className="button">
        <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button