import {
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
  DELETE_POST,
} from '../actions/types'
export default function(state = {}, action) {
  var { payload } = action
  switch (action.type) {
    case LIKE_POST:
      state[payload] = {
        ...state[payload],
        liked: true,
        likes: action.likes,
      }
      return { ...state }
    case DISLIKE_POST:
      state[payload] = {
        ...state[payload],
        liked: false,
        likes: action.likes,
      }
      return { ...state }
    case ADD_COMMENT:
      state[payload] = {
        ...state[payload],
        comments: [...state[payload]['comments'], action.comment],
      }
      console.log({ ...state })
      return { ...state }
    case DELETE_POST:
      delete state[payload]
      return { ...state }
    default:
      return state
  }
}
