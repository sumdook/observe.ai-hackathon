import React from 'react'
import ListCard from './card'
import styled from 'styled-components'

const ListViewWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
`
//Renders the Card corresponding to each Post.
export default class ListView extends React.Component {
  renderPhotos = () => {
    const { photos } = this.props
    return Object.keys(photos)
      .map(key => <ListCard key={key} photo={photos[key]} />)
      .reverse()
  }

  render() {
    return <ListViewWrapper>{this.renderPhotos()}</ListViewWrapper>
  }
}
