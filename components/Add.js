import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {Consumer} from '../Context'
import { Button } from 'react-native-elements';
import { Actions } from "react-native-router-flux";
export default class Add extends Component {
  state = {
    title: "",
    content: ""
  };

  onSubmit(dispatch) {
        const {title,content} = this.state
        newObject = {
            id:4,
            title,
            content
        }
        dispatch({
            type:"ADD_TASK",
            payload:newObject
        })
        Actions.home()
  }

  render() {
    const { title, content } = this.state;
    return (
      <Consumer>
          {value => {
              const {dispatch} = value
              return (
                <View>
                <Text style={Styles.HeadingText}>ADD TASK</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={title => this.setState({ title })}
                  value={title}
                />
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  onChangeText={content => this.setState({ content })}
                  value={content}
                />
        
                <Button title="Submit" onPress={this.onSubmit.bind(this,dispatch)} type="outline" />
              </View>
              )
          }}
      </Consumer>
    );
  }
}
const Styles = StyleSheet.create({
  HeadingText: {
    alignSelf: "center"
  }
});
