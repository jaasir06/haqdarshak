import React from 'react'
import './BgInner.css'

const BgInner = ({children}) => {
  return (
    <div className="bg-inner">
         {children}
    </div>
  )
}

export default BgInner