
import React, { Component } from 'react';
import {
  AppRegistry, FlatList, StyleSheet, Text, View, Alert,
  Platform, TouchableHiglight, Dimensions,
  TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal style={{
        justifyContent: 'center',
        borderRadius: Platform.OS === "ios" ? 30 : 0,
        width: screen.width - 80,
        height: 200
      }}>
      position='center'
      backdrop={true}
      onclosed={() => {
        alert("Modal closed")
      }}
      <Text>New food info</Text>
    </Modal>
    )
  }
}
