import React, { Component } from 'react'
const Context = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return { ...state, view: action.payload }
    default:
      return state
  }
}
export class ContextProvider extends Component {
  state = {
    view: 'list',
    theme: 'light',
    dispatch: action => this.setState(state => reducer(state, action)),
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const ContextConsumer = Context.Consumer
