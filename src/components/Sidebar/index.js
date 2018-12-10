import React from 'react'
import { Link } from 'gatsby'
import SidebarWrapper from './style'
import Home from '../../images/home.svg'
import Search from '../../images/search.svg'
import Like from '../../images/like.png'
import Add from '../../images/new.png'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <div className="Empty" />
      <div className="viewNav">
        <Link to="/" activeClassName="active">
          <img src={Home} alt="view-icon" className="icon" />
        </Link>
        <img src={Search} alt="view-icon" className="icon" />
        <img src={Like} alt="view-icon" className="icon" />
      </div>
      <Link to="/new">
        <img src={Add} alt="add-icon" className="add_icon" />
      </Link>
    </SidebarWrapper>
  )
}

export default Sidebar
