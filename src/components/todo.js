import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';




class Todo extends Component {
  render() {
    return (

          <View style={{flexDirection: 'column'}}>
              <Text> Hei!!!!</Text>
          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },

/** This doesn't work??
  button: {
    backgroundColor: '#ffccff',
    borderRadius: 10,
    width:600,
    height: 110,
    //color: 'black',
  },**/
});

export default Todo
