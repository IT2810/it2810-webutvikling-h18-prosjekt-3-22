

// import App from './App';

import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import AddModal from './addModal';

class FlatListItem extends Component {
    render() {
        return (
          <View style={{
                flex: 1

          }}>
              <Text style={styles.flatListItem}>{this.props.item.name}</Text>
              <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    },
    header: {
      backgroundColor: '#4d79ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: "#ddd",
    },

    headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
    },

    container: {
    flex: 1,
  },
});

export default class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = ({
      deletedRowKey: null,
    })
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  refreshFlatList = (activeKey) =>{
    this.setState((prevState) => {
      return{
        deletedRowKey: activeKey
      };
    });
  }
  _onPressAdd(){
    this.refs.addModal.showAddModal();
  }
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.headerText}> Appointments </Text>
         <TouchableHighlight
             style={{marginRight: 10}}
             underlayColor='tomato'
             onPress={this._onPressAdd}
             >
             <Text>+</Text>
          </TouchableHighlight>
        </View>
            <FlatList
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
            <AddModal ref={'addModal'} parentFlatList={this} >

            </AddModal>
        </View>
      );
    }
}

AppRegistry.registerComponent('prosjekt3', () => Appointments);
