import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import ImageUploader from 'react-images-upload'

import * as actions from '../actions'

export class New extends Component {
  state = {
    pictures: [],
  }
  onDrop = picture => {
    console.log(picture)
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })
  }
  render() {
    return (
      <Layout>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  actions
)(New)
