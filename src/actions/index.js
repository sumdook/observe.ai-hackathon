import { LIKE_POST, DISLIKE_POST, ADD_COMMENT, DELETE_POST } from './types'

export const likePost = (id, likes) => {
  return { type: LIKE_POST, payload: id, likes }
}

export const dislikePost = (id, likes) => {
  return { type: DISLIKE_POST, payload: id, likes }
}

export const addComment = (id, comment) => {
  console.log(comment)
  return { type: ADD_COMMENT, payload: id, comment }
}

export const deletePost = id => {
  return { type: DELETE_POST, payload: id }
}
