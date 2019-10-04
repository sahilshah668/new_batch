import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";
import Details from "./Details";
import { Consumer } from "../Context";

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tasks } = value;
          return (
            <React.Fragment>
              <View style={{ flex: 1 }}>
                {tasks.map(task => {
                  return (
                    <Details
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      content={task.content}
                    />
                  );
                })}
              </View>
              <Button
                onPress={() => {
                  Actions.Add();
                }}
                title="get me to the add"
              />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
