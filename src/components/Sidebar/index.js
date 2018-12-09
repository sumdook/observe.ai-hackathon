import React from 'react'
import { Link } from 'gatsby'
import SidebarWrapper from './style'

import Grid from '../../images/grid.svg'
import List from '../../images/list.svg'

import Add from '../../images/new.png'

import { ContextConsumer } from '../context'

const Sidebar = () => {
  return (
    <ContextConsumer>
      {({ view, dispatch }) => (
        <SidebarWrapper>
          <div className="Empty" />
          <div className="viewNav">
            <img
              src={Grid}
              alt="view-icon"
              className={`icon ${view === 'grid' ? 'active' : ''}`}
              onClick={() => {
                dispatch({ type: 'CHANGE_VIEW', payload: 'grid' })
              }}
            />
            {/*<img
              src={Dual}
              alt="view-icon"
              className={`icon ${view === 'dual' ? 'active' : ''}`}
              onClick={() => {
                dispatch({ type: 'CHANGE_VIEW', payload: 'dual' })
              }}
            />*/}
            <img
              src={List}
              alt="view-icon"
              className={`icon ${view === 'list' ? 'active' : ''}`}
              onClick={() => {
                dispatch({ type: 'CHANGE_VIEW', payload: 'list' })
              }}
            />
          </div>
          <Link to="/new">
            <img src={Add} alt="add-icon" className="add_icon" />
          </Link>
        </SidebarWrapper>
      )}
    </ContextConsumer>
  )
}

export default Sidebar
