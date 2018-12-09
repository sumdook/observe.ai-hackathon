import { createStore as reduxCreateStore } from 'redux'
import reducers from '../reducers'
import Data from '../data.json'

const InitialState = {
  photos: Data,
}
const createStore = () => reduxCreateStore(reducers, InitialState)
export default createStore
