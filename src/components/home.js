import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            P.I.M.M.
          </Text>
          <View style={styles.todo} >
              <Button
              title={`To do`}
              testID={'toDoBtn'}
              onPress={() => this.props.navigation.navigate('Todo')}
              icon={{name: 'check-square-o', type: 'font-awesome', size: 60}}
              />
          </View>
          <View style={styles.goal} >
              <Button
              title={`Goal`}
              testID={'goalBtn'}
              onPress={() => this.props.navigation.navigate('Goal')}
              icon={{name: 'flag', type: 'font-awesome', size: 60}}
              />
          </View>
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
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 75,
  },
  todo: {
    flex: 1,
    marginTop: 50,
    width: 200,
  },
  goal: {
    flex: 1,
    marginBottom: 100,
    width: 200,
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

export default Home