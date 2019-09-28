import React, { Component } from 'react'
import {Router, Scene} from 'react-native-router-flux'
import Home from './components/Home'
import Add from './components/Add'
export default class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key='root' >
                    <Scene key='home' component={Home} title="Home" initial />
                    <Scene key='Add'  component={Add} title="Add" />

                </Scene>
            </Router>   
        )
    }
}
