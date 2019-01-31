import React from 'react'
import logo from './logo.svg'
import './style.css'

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logo} className="logo" alt="logo" />
      <div className="logoTitle">Softlucky</div>
    </div>
  )
}

export default Logo