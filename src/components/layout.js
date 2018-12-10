import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './Header/index'
import Sidebar from './Sidebar/index'
import './layout.css'

//styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  flex-wrap: nowrap;
`
//styles
const Inner = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: flex-end;
`
//styles
const PageWrapper = styled.div`
  flex-grow: 1;
  max-width: 1600px;
  min-width: 800;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 90vh;
`

//The Wrapper containing the header and the sidebar.
//It makes the header and sidebar sticky
//The SEO configuration is passed down using react-helmet
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
