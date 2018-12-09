import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './Header/index'
import Sidebar from './Sidebar/index'
import './layout.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  justify-content: space-between;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: flex-end;
`

const PageWrapper = styled.div`
  flex-grow: 1;
  max-width: 1600px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Header />
          <Inner>
            <PageWrapper>{children}</PageWrapper>
            <Sidebar />
          </Inner>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
