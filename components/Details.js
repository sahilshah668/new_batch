import React, { Component } from 'react'
import {View,Text} from "react-native"
import {Card} from 'react-native-elements'
export default class Details extends Component {
    render() {
        return (
            <View>
                <Card>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.content}</Text>
                </Card>
            </View>
        )
    }
}
