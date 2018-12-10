import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Card from '../../components/ListView/card'

import Layout from '../../components/layout'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 10px;
`

class Posts extends Component {
  renderCard = () => {
    let id = this.props['*'].split('/').slice(-1)[0]
    if (this.props.photos[id]) return <Card photo={this.props.photos[id]} />
  }
  render() {
    return (
      <Layout>
        <Wrapper>{this.renderCard()}</Wrapper>
      </Layout>
    )
  }
}

const mapStateToProps = ({ photos }) => {
  console.log(photos)
  return { photos }
}
export default connect(
  mapStateToProps,
  null
)(Posts)
