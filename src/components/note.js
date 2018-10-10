import React, { Component } from "react";
import { Icon } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";



class Note extends Component {
  render(){
    return (
        <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}>{this.props.val.date}></Text>
            <Text style={styles.noteText}>{this.props.val.note}></Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                <Icon name='delete' color='#ff704d' />
            </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },

  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#99b3ff',
  },

  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
});

export default Note
