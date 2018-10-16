import React, { Component } from 'react';
import { Alert, StyleSheet, View, TouchableOpacity } from 'react-native';
//import { Button } from 'react-native-elements';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";



class Home extends Component {
  render() {
    return (
      /**Vi hadde planer om å bruke ikoner fra react-native-vector-icons, men dette funket av en eller annen grunn ikke.
      Vi var på sal, men ingen av de som satt der klarte å fikse det og ga oss dermed forslaget om å bruke emojies isteden.
      **/
      <Container style={styles.container}>
            <Content styles={styles.content}>
                <Button light style={styles.mb15}
                onPress={() => this.props.navigation.navigate('Todo')}>
                <Text style={styles.text}>✔️ Todo</Text>
                </Button>
                <Button light style={styles.mb15}
                onPress={() => this.props.navigation.navigate('Goal')}>
                <Text style={styles.text}>🏆 Goal</Text>
                </Button>
                <Button light style={styles.mb15}
                onPress={() => this.props.navigation.navigate('Goal')}>
                <Text style={styles.text}>☎️ Contacts</Text>
                </Button>
            </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
},

  mb15: {
   marginBottom: 20,
   width: 300,
   height: 100,
   alignItems: 'center',
   justifyContent: 'center',
 },

 text: {
   fontSize: 30,
 }

  }

/** This doesn't work??
  button: {
    backgroundColor: '#ffccff',
    borderRadius: 10,
    width:600,
    height: 110,
    //color: 'black',
  },**/
);

export default Home
