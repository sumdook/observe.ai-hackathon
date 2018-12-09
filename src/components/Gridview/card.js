import React, { Component } from 'react'
import { Avatar, Icon, Popconfirm } from 'antd'
import { connect } from 'react-redux'

import * as actions from '../../actions'

import Comment from '../../images/chat.svg'
import CardWrapper from './style'
class GridCard extends Component {
  handleDelete = () => {
    this.props.deletePost(this.props.photo.id)
  }
  render() {
    const { likePost, dislikePost } = this.props
    const { Image, likes, liked, id } = this.props.photo
    return (
      <CardWrapper>
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="content">
          <div className="left">
            <Avatar icon="user" size="large" style={{ margin: 20 }} />
            <div className="user_details">
              <p className="userame">
                sumdook <br />
                <span>7 hours ago</span>
              </p>
            </div>
          </div>
          <div className="right">
            <p>{likes} Likes</p>
            <Icon
              className="icon"
              type="heart"
              style={{ fontSize: 25, color: `${liked ? '#ED4956' : ''}` }}
              theme={`${liked ? 'filled' : ''}`}
              onClick={() => {
                liked ? dislikePost(id, likes - 1) : likePost(id, likes + 1)
              }}
            />
            <img src={Comment} alt="comment" className="comment" />
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
        </div>
      </CardWrapper>
    )
  }
}
export default connect(
  null,
  actions
)(GridCard)
