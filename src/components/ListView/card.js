import React, { Component } from 'react'
import { Avatar, Icon, Form, Input, Popconfirm } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Send from '../../images/send.png'
import CardWrapper from './style'

class ListCard extends Component {
  state = { comment: '' }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addComment(this.props.photo.id, this.state.comment)
    this.setState({ comment: '' })
  }
  onChange = e => {
    this.setState({ comment: e.target.value })
  }
  handleDelete = () => {
    this.props.deletePost(this.props.photo.id)
  }
  render() {
    const { likePost, dislikePost } = this.props
    const { id, Image, likes, liked, caption } = this.props.photo
    return (
      <CardWrapper>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="content">
          <div className="header">
            <div className="user_details">
              <Avatar icon="user" size="large" style={{ margin: 20 }} />
              <p className="userame">
                sumdook <br />
                <span>7 hours ago</span>
              </p>
            </div>
            <Popconfirm
              placement="bottom"
              title="Are you sure you want to delete this?"
              onConfirm={this.handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Icon
                className="icon delete"
                type="delete"
                style={{ fontSize: 22 }}
              />
            </Popconfirm>
          </div>

          <div className="likes">
            <Icon
              className="icon"
              type="heart"
              style={{ fontSize: 25, color: `${liked ? '#ED4956' : ''}` }}
              theme={`${liked ? 'filled' : ''}`}
              onClick={() => {
                liked ? dislikePost(id, likes - 1) : likePost(id, likes + 1)
              }}
            />
            <p>Namyvam and {likes} others like this.</p>
          </div>

          <div className="caption">
            <p>
              <span className="username">Sumdook </span>
              {caption}
            </p>
          </div>
          <div className="comments">
            <p>asdasdLikes</p>
            <p>asdasdLikes</p>
            <p>asdasdLikes</p>
            <p>asdasdLikes</p>
          </div>

          <Form>
            <div className="add_comment">
              <Input
                value={this.state.comment}
                onChange={this.onChange}
                onPressEnter={this.handleSubmit}
                style={{ borderRadius: 45, height: 60, fontSize: 18 }}
              />
              <img src={Send} alt="SEND" onClick={this.handleSubmit} />
            </div>
          </Form>
        </div>
      </CardWrapper>
    )
  }
}

export default connect(
  null,
  actions
)(ListCard)
