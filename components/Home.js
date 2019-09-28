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
    render() {
        const {tasks} = this.state
        
        return (
            <View>
             {tasks.map(task => {
                    return <Details key={task.id} title={task.title} content={task.content} />
                })}
                <Button onPress={()=> {Actions.Add()}}  title="get me to the add" />
            </View>
        )
    }
}
