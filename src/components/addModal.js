
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
  constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newDate: ''
        };
    }

  showAddModal = () => {
    this.refs.myModal.open();
  }

  render(){
    return(
      <Modal
          ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New appointment</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    placeholder="Enter your appointment"
                    value={this.state.newFoodName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => this.setState({ newDate: text })}
                    placeholder="Enter date"
                    value={this.state.newDate}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.newFoodName.length == 0 || this.state.newDate.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                            foodDescription: this.state.newDate
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
    )
  }
}
