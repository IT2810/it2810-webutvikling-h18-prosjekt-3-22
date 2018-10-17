import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import TodoScreen from './src/components/todo.js'
import HomeScreen from './src/components/home.js'
import GoalScreen from './src/components/goal.js';
import ContactHomeScreen from './src/components/contactHome.js';

import {createStackNavigator} from 'react-navigation';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Todo: TodoScreen,
    Goal: GoalScreen,
    ContactHome: ContactHomeScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
