
import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity
} from "react-native";

import Note from './note.js'

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  componentDidMount() {
    Tasks.all(noteArray => this.setState({ noteArray: noteArray || [] }));
  }

  changeTextHandler = noteText => {
    this.setState({ noteText: noteText });
  };


    addNote = () => {
      let notEmpty = this.state.noteText.trim().length > 0;
      if(notEmpty){
          var d = new Date();
          this.state.noteArray.push({
            'date': d.getFullYear() + "/" + (d.getMonth() + 1) +
            "/" + d.getDate(),
            "note" : this.state.noteText
          })
          this.setState(
            prevState => {
              let {noteArray, noteText} = prevState;
              return {
                noteArray: noteArray.concat({key: noteArray.length, noteText: noteText}),
                noteText: ""
              };
            },
                () => Tasks.save(this.state.noteArray)
          );

          //this.setState({noteArray: this.state.noteArray})
          //this.setState({noteText: ''});
      }
    }


  deleteNote = i => {
    this.setState(
      prevState => {
        let noteArray = prevState.noteArray.slice();
        noteArray.splice(i, 1);

        return {noteArray: noteArray};
      },
      () => Tasks.save(this.state.noteArray)
    );
  };


  render(){

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyVal={key} val={val}
            deleteMethod={() => this.deleteNote(key)} />
    })
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}>Todo</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>
              {notes}
          </ScrollView>


          <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
              placeholder=">note"
              placeholderTextColor="white"
              underlineColorAndroid="transparent">
          </TextInput>

        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        </View>
    );
  }


}


let Tasks = {
  convertToArrayOfObject(noteArray, callback) {
    return callback(
      noteArray ? noteArray.split("||").map((note, i) => ({ key: i, noteText: note })) : []
    );
  },
  convertToStringWithSeparators(noteArray) {
    return noteArray.map(note=> note.noteText).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, noteArray) =>
      this.convertToArrayOfObject(noteArray, callback)
    );
  },
  save(noteArray) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(noteArray));
  }
};


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


AppRegistry.registerComponent("Todo", () => Todo);
