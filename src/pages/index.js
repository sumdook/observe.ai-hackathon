import React from 'react'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import GridView from '../components/Gridview/index'
import ListView from '../components/ListView/index'
import { ContextConsumer } from '../components/context'

//The entry point of the application, based on the view
//in the context, the appropriate list in reendered.
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
  console.log(photos)
  return { photos }
}
export default connect(
  mapStateToProps,
  null
)(IndexPage)
