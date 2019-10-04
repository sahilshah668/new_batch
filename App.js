import React, { Component } from 'react'
import {View} from 'react-native'
import Router from './Router'
import {Provider} from './Context'
export default class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
        <Router />
      </React.Fragment>
      </Provider>
    )
  }
}
