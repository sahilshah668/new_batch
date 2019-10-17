import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "project1",
        content: "lorem ipsum"
      },
      {
        id: 2,
        title: "project2",
        content: "lorem ipsum"
      },
      {
        id: 3,
        title: "project3",
        content: "lorem ipsum"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
