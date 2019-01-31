import React, { Component } from 'react'
import Navlink from '../../components/navlink'
import './style.css'

class HeaderContainer extends Component {
  render () {
    return (
      <div className="headerContainer">
        <Navlink />
      </div>
    )
  }
}

export default HeaderContainer