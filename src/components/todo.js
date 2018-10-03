
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";



class Todo extends Component {
  render(){
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}>- Noter -</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>

          </ScrollView>


          <TextInput
              style={styles.textInput}
              placeholder=">note"
              placeholderTextColor="white"
              underlineColorAndroid="transparent">
          </TextInput>

        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
  },

  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#4d79ff',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 25,
  },


});

export default Todo
