
import React, { Component } from "react";
import { Button} from "native-base";
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  ScrollView,
  View,
  FlatList,
  Keyboard,
  Platform,
  TouchableOpacity
} from "react-native";

import Note from './note.js'
const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  changeTextHandler = noteText => {
    this.setState({ noteText: noteText });
  };


    addNote = () => {
      let notEmpty = this.state.noteText.trim().length > 0;

      //Checks to see if something is written in the todo textfield.
      //If nothing is written, nothing will happen when you click the add button
      if(notEmpty){
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

  componentDidMount() {
  Keyboard.addListener(
    isAndroid ? "keyboardDidShow" : "keyboardWillShow",
    e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
  );

  Keyboard.addListener(
    isAndroid ? "keyboardDidHide" : "keyboardWillHide",
    () => this.setState({ viewPadding: viewPadding })
  );

  Tasks.all(noteArray => this.setState({ noteArray: noteArray || [] }));
}

render() {
   return (
     <View
       style={[styles.container, { paddingBottom: this.state.viewPadding }]}
     >
     <View style={styles.header}>
        <Text style={styles.headerText}> Todo </Text>
      </View>
       <FlatList
         style={styles.list}
         data={this.state.noteArray}
         renderItem={({ item, index }) =>(
           <View >

             <View style={styles.listItemCont}>
               <Text style={styles.listItem}>
                 {item.noteText}
               </Text>
               <Button light style={styles.mb15}
               onPress={() => this.deleteNote(index)}>
               <Text uppercase={false} style={styles.text}>🗑️</Text>
               </Button>
             </View>
           </View>
        ) }
        keyExtractor={(item) => item.toString()}
       />
       <TextInput
         style={styles.textInput}
         onChangeText={this.changeTextHandler}
         onSubmitEditing={this.addNote}
         value={this.state.noteText}
         placeholder="Add Tasks"
         returnKeyType="done"
         returnKeyLabel="done"
       />

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
    return noteArray.map(note => note.noteText).join("||");
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
list: {
  width: "100%"
},
listItem: {
  paddingTop: 2,
  paddingBottom: 2,
  fontSize: 18
},

listItemCont: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 10
},

textInput: {
  height: 40,
  paddingRight: 10,
  paddingLeft: 10,
  borderColor: "gray",
  borderWidth: isAndroid ? 0 : 1,
  width: "100%"
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

  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },

  text: {
    fontSize: 20,
  },


});


AppRegistry.registerComponent("Todo", () => Todo);
