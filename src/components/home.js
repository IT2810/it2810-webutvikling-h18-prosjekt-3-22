import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={{flex:1 , marginTop:100, width:200}} >
            <Text>Home Screen</Text>
            <Button
            title={`✅ To do`}
            onPress={() => this.props.navigation.navigate('Todo')}
            />
        </View>
        <View style={{flex:1 , marginBottom:100, width:200}} >
            <Button
            onPress={() => this.props.navigation.navigate('Goal')}
            title={`🏆 Goal`}
            />
        </View>
        <View style={{flex:1 , marginBottom:100, width:200}} >
            <Button
              onPress={() => this.props.navigation.navigate('ContactHome')}
              title={`👥 Contacts`}
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

export default Home
