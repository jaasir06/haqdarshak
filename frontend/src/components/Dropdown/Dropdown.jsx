import React from 'react'
import './Dropdown.css'

const Dropdown = ({ name, options = [], onChange, disabled = false }) => {
  return (
    <div className='dropdown'>
        <select name={name} onChange={onChange} disabled={disabled}>
            <option value="">{name}</option>
            {options.map((option) => (
            <option key={option.isoCode || option.stateCode} value={option.isoCode || option.stateCode}>
              {option.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default Dropdown