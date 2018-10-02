import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import TodoScreen from './src/components/todo.js'

import {
  createStackNavigator,StackActions, NavigationActions
} from 'react-navigation';




class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{flex:1 , marginTop:150, width:200}} >
            <Text>Tittel</Text>
              <Button
              title={`To do`}
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Todo' })
                  ],
                }))
              }}
              icon={{name: 'check-square-o', type: 'font-awesome', size: 60}}
              />
          </View>
          <View style={{flex:1, marginBottom:150, width: 200}} >
              <Button
              icon={{name: 'flag', type: 'font-awesome', size: 60}}
              title={`Goal`}
              />
      </View>

      </View>
    );
  }
}


export default createStackNavigator({
  App: {
    screen: App,
  },
  Todo: {
    screen: TodoScreen,
  },
}, {
    initialRouteName: 'App',
});
