import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../routes/Home';
import StackScreen from '../routes/StackScreen';
import Main  from '../routes/Main';

const Stack = createStackNavigator()

export default class StackNav extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='忘記密碼' component={StackScreen} />
                <Stack.Screen name='歡迎' component={Main} />
            </Stack.Navigator>
        )
    }
}