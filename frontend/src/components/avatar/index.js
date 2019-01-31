import React from 'react'
import {Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './style.css'

const Avatar = props => {
  let {className, avatar, centered, link} = props

  avatar = avatar || 'http://i.imgur.com/7o5cwt8.png'
  centered = centered !== null ? centered : true
  className = className || 'avatar'
  const avatarComponent = (
    <Image className={className} src={avatar} centered={centered} />
  )
  if (link) {
    return <Link to={link}>{avatarComponent}</Link>
  }
  return avatarComponent
}

export default Avatar