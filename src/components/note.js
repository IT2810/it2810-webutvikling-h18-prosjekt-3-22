import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";



class Todo extends Component {
  render(){
    return (
        <View key={this.props.keyval} style={styles.note}>
            <Text style={styles.noteText}>{this.props.val.date}></Text>
            <Text style={styles.noteText}>{this.props.val.date}></Text>

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDate}>
                <Text style={styles.noteDeleteText}>D</Text>
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
    borderLeftColor: '#E91E63',
  },

  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
  },

  noteDeleteText: {
    color: 'white',
  }
});

export default Todo
