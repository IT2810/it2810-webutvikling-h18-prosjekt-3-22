import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
  render() {
    return (

          <View style={{flexDirection: 'column'}}>
              <View style={{flex:1 , marginTop:150}} >
                  <Button style={styles.button}
                  icon={{name: 'check-square-o', type: 'font-awesome', size: 125}}
                  title={`To do`}
                  />
              </View>
              <View style={{flex:1, marginBottom:150}} >
                  <Button style={styles.button}
                  icon={{name: 'check-square-o', type: 'font-awesome', size: 125}}
                  title={`Goal`}
                  />
          </View>

          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },

  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    width:500,
    height: 110,
    color: 'black',
  },
});

export default Home
