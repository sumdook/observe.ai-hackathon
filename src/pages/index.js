import React from 'react'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import GridView from '../components/Gridview/index'
import ListView from '../components/ListView/index'
import { ContextConsumer } from '../components/context'
const IndexPage = props => (
  <Layout>
    <ContextConsumer>
      {({ view }) => {
        if (view === 'grid') {
          return <GridView photos={props.photos} />
        }
        return <ListView photos={props.photos} />
      }}
    </ContextConsumer>
  </Layout>
)

const mapStateToProps = ({ photos }) => {
  return { photos }
}
export default connect(
  mapStateToProps,
  null
)(IndexPage)
