import React, { Component } from 'react'
import {View,Text,Button} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Details from './Details'

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            tasks:[
                {
                    id:1,
                    title:'project1',
                    content:'lorem ipsum'
                },
                {
                    id:2,
                    title:'project2',
                    content:'lorem ipsum'
                },
                {
                    id:3,
                    title:'project3',
                    content:'lorem ipsum'
                }
            ]
        }
    }

    onDel (id) {
        const {tasks} = this.state
        const task = tasks.filter(value => value.id !== id)
        this.setState({tasks:task})
    }
    render() {
        const {tasks} = this.state
        
        return (
           <React.Fragment>
                <View style={{flex:1}}>
             {tasks.map(task => {
                    return <Details key={task.id} title={task.title} content={task.content} onDeleteHandler={this.onDel.bind(this,task.id)} />
                })}
            </View>
                <Button onPress={()=> {Actions.Add()}}  title="get me to the add" />

           </React.Fragment>
        )
    }
}
