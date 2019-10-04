import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { Consumer } from "../Context";
export default class Details extends Component {
  onDelete = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <View>
              <Card>
                <Text>{this.props.title}</Text>
                <Text>{this.props.content}</Text>
                <Button
                  title="delete"
                  type="solid"
                  onPress={this.onDelete.bind(this, this.props.id, dispatch)}
                />
              </Card>
            </View>
          );
        }}
      </Consumer>
    );
  }
}
