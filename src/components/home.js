import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            P.I.M.M.
          </Text>
          <View style={styles.todo}>
            <Button
            onPress={() => this.props.navigation.navigate('Todo')}
            title={`✅ To do`}
            testID={'toDoBtn'}
            />
        </View>
        <View style={styles.goal} >
            <Button
            onPress={() => this.props.navigation.navigate('Goal')}
            title={`🏆 Goal`}
            testID={'goalBtn'}
            />
        </View>
        <View style={styles.contacts} >
            <Button
              onPress={() => this.props.navigation.navigate('ContactHome')}
              title={`👥 Contacts`}
              testID= {'contactsBtn'}
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
    //margin: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 75,
  },
  todo: {
    flex: 1,
    marginTop: 50,
    width: 300,
    //height: 400,
  },
  goal: {
    flex: 1,
    //marginBottom: 100,
    width: 300,
  },
  contacts: {
    flex: 1,
    marginBottom: 100,
    width: 300,
  }

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
