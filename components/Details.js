import React, { Component } from 'react'
import {View,Text} from "react-native"
import {Card,Button} from 'react-native-elements'
export default class Details extends Component {
    onDelete = () => {
        this.props.onDeleteHandler()
        // console.log('pressed')
    }

    render() {
        return (
            <View>
                <Card>
                    <Text>{this.props.title}</Text>
                    <Text>{this.props.content}</Text>
                    <Button title="delete" type="solid" onPress={this.onDelete} />
                </Card>
            </View>
        )
    }
}
