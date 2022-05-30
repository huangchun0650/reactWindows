import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import StackNav from './src/navigation/StackNav'
import Toast from 'react-native-toast-message'

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <StackNav />
        <Toast />
      </NavigationContainer>
    )
  }
}