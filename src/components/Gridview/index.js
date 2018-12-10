import React, { Component } from 'react'
import GridCard from './card'
import styled from 'styled-components'

const GridViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 50px;
`
//Renders the Card corresponding to each Post.
export default class GridView extends Component {
  renderPhotos = () => {
    const { photos } = this.props
    return Object.keys(photos)
      .map(key => <GridCard key={key} photo={photos[key]} />)
      .reverse()
  }

  render() {
    return <GridViewWrapper>{this.renderPhotos()}</GridViewWrapper>
  }
}
