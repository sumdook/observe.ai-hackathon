import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { connect } from 'react-redux'
import { Form, Input, Button, Icon } from 'antd'
import styled from 'styled-components'
import FileBase64 from 'react-file-base64'
import axios from 'axios'

import * as actions from '../actions'

import Layout from '../components/layout'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Inner = styled.div`
  width: 500px;
  margin: 60px;
  padding: 50px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 3px 68px -4px rgba(0, 0, 0, 0.28);
  h1 {
    margin: 20px;
    color: #ed4956;
  }
  .input {
    font-size: 16px;
    border-radius: 40px;
    height: 50px;
  }
  .button {
    margin: 40px;
  }
  .upload {
    display: flex;
    width: 300px;
    align-items: center;
  }
`

export class New extends Component {
  state = { picture: '', caption: '' }

  handleSubmit = () => {
    const config = {
      baseURL: 'https://cors-anywhere.herokuapp.com/https://api.imgur.com',
      headers: {
        Authorization: 'Client-ID ' + 'd8dde432911b756',
      },
    }
    if (this.state.picture !== '') {
      axios.post('/3/image', this.state.picture, config).then(res => {
        const id = new Date().getTime()
        const post = {
          id: id,
          Image: res.data.data.link,
          likes: 0,
          liked: false,
          comments: [],
          caption: this.state.caption,
        }
        this.props.addPost(id, post)
        navigate('/')
      })
    }
  }

  setPicture = pic => {
    let image = pic.base64.split(',')[1]
    this.setState({
      picture: image,
    })
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <Form onSubmit={this.handleSubmit}>
            <Inner>
              <h1>Upload Image</h1>
              <FileBase64 multiple={false} onDone={this.setPicture} />
              <div className="upload">
                <Input
                  className="input"
                  label="Caption"
                  value={this.state.caption}
                  placeholder="Enter Caption"
                  onChange={e => {
                    this.setState({ caption: e.target.value })
                  }}
                />
                <Button
                  type="primary"
                  className="button"
                  size="large"
                  onClick={this.handleSubmit}
                >
                  <Icon type="upload" />
                </Button>
              </div>
            </Inner>
          </Form>
        </Wrapper>
      </Layout>
    )
  }
}

export default connect(
  null,
  actions
)(New)
