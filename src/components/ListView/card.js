import React, { Component } from 'react'
import { Avatar, Icon, Form, Input, Popconfirm } from 'antd'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import timeSince from '../../util/time'

import ProfilePic from '../../images/profile_pic.jpg'
import Send from '../../images/send.png'
import CardWrapper from './style'

//Heavily styled card component. Made responsive using styled components
class ListCard extends Component {
  state = { comment: '' }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.comment !== '')
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
    const { id, Image, likes, liked, caption, comments } = this.props.photo
    return (
      <CardWrapper>
        <div
          className="image"
          onDoubleClick={() => {
            liked ? dislikePost(id, likes - 1) : likePost(id, likes + 1)
          }}
        >
          <img src={Image} alt="" />
        </div>
        <div className="content">
          <div className="header">
            <div className="user_details">
              <Avatar src={ProfilePic} size="large" style={{ margin: 20 }} />
              <p className="username">
                sumdook <br />
                <span>{timeSince(id)} ago</span>
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
              className="icon heart"
              type="heart"
              style={{ fontSize: 25, color: `${liked ? '#ED4956' : ''}` }}
              theme={`${liked ? 'filled' : ''}`}
              onClick={() => {
                liked ? dislikePost(id, likes - 1) : likePost(id, likes + 1)
              }}
            />
            <p>
              <span>Namyvam</span> and <span>{likes} others</span> like this.
            </p>
          </div>

          <div className="caption">
            <p>
              <span className="username">Sumdook </span>
              {caption}
            </p>
          </div>
          <div className="comments">
            {comments.map(comment => (
              <p>
                <span>sumdook</span>
                {comment}
              </p>
            ))}
          </div>

          <Form>
            <div className="add_comment">
              <Input
                className="input"
                value={this.state.comment}
                onChange={this.onChange}
                onPressEnter={this.handleSubmit}
                style={{ borderRadius: 45, height: 60, fontSize: 18 }}
              />
              <img
                src={Send}
                alt="send"
                className="send"
                onClick={this.handleSubmit}
              />
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
