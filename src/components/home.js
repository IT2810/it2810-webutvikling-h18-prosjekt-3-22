import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

class Home extends Component {
  render() {
    return (

          <View style={{flexDirection: 'column'}}>
              <View style={{flex:1 , marginTop:150, width:200}} >

                  <Button
                  icon={{name: 'check-square-o', type: 'font-awesome', size: 60}}
                  title={`To do`}
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
