

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
    }
});

export default class Appointments extends Component {
  constructor(props){
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  _onPressAdd(){
    this.refs.addModal.showAddModal();
  }
    render() {
      return (
        <View style={{flex: 1, marginTop: 22}}>
        <View style={{
         backgroundColor: 'tomato',
         flexDirection: 'row',
         justifyContent:'flex-end',
         alignItems: 'center',
         height: 64}}>
         <TouchableHighlight
             style={{marginRight: 10}}
             underlayColor='tomato'
             onPress={this._onPressAdd}
             >
             <Text>ggg</Text>
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
