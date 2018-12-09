import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/state/createStore'
import { ContextProvider } from './src/components/context'
const store = createStore()

export default ({ element }) => (
  <ContextProvider>
    <Provider store={store}>{element}</Provider>
  </ContextProvider>
)
