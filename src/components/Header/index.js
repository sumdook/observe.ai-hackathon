import React from 'react'
import { Avatar } from 'antd'
import { Link } from 'gatsby'

import Logo from '../../images/logo.png'
import LogoMobile from '../../images/logo_mobile.svg'
import Home from '../../images/home.svg'
import Search from '../../images/search.svg'
import Like from '../../images/like.png'
import Send from '../../images/send.png'

import HeaderWrapper from './style'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">
      <img src={Logo} alt="logo" className="logo" />
    </Link>
    <img src={LogoMobile} alt="logo" className="logo_mobile" />

    <nav>
      <Link to="" activeClassName="active">
        <img src={Home} className="navIcon home" alt="Home" />
      </Link>
      <img src={Search} className="navIcon search" alt="Search" />
      <img src={Like} className="navIcon like" alt="Likes" />
    </nav>

    <div className="userInfo">
      <Avatar src={Send} className="send" style={{ margin: 20 }} />
      <Avatar icon="user" size="large" style={{ margin: 20 }} />
    </div>
  </HeaderWrapper>
)

export default Header
