import React from 'react'
import { Avatar } from 'antd'
import { Link } from 'gatsby'

import Grid from '../../images/grid.svg'
import List from '../../images/list.svg'

import Logo from '../../images/logo.png'
import LogoMobile from '../../images/logo_mobile.svg'
import Send from '../../images/send.png'
import ProfilePic from '../../images/profile_pic.jpg'
import HeaderWrapper from './style'

import { ContextConsumer } from '../context'

//Header component with option to switch the view using context api!
//An action is dispatch to the context using Context consumer
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">
      <img src={Logo} alt="logo" className="logo" />
    </Link>
    <img src={LogoMobile} alt="logo" className="logo_mobile" />

    <ContextConsumer>
      {({ view, dispatch }) => (
        <nav>
          <img
            src={Grid}
            alt="view-icon"
            className={`icon ${view === 'grid' ? 'active' : ''}`}
            onClick={() => {
              dispatch({ type: 'CHANGE_VIEW', payload: 'grid' })
            }}
          />
          <img
            src={List}
            alt="view-icon"
            className={`icon ${view === 'list' ? 'active' : ''}`}
            onClick={() => {
              dispatch({ type: 'CHANGE_VIEW', payload: 'list' })
            }}
          />
        </nav>
      )}
    </ContextConsumer>

    <div className="userInfo">
      <Avatar src={Send} className="send" style={{ margin: 20 }} />
      <Avatar src={ProfilePic} size="large" style={{ margin: 20 }} />
    </div>
  </HeaderWrapper>
)

export default Header
