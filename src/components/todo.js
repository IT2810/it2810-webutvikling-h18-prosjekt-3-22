import React, { Component } from "react";
import { Button} from "native-base";
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  TextInput,
  View,
  FlatList,
  Keyboard,
  Platform,
  TouchableOpacity
} from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoArray: [],
      todoText: '',
    }
  }

  changeTextHandler = todoText => {
    this.setState({ todoText: todoText });
  };

 //Adds a new todo
 addTodo = () => {

    //Checks to see if something is written in the todo textfield.
    let notEmpty = this.state.todoText.trim().length > 0;

    //If nothing is written in the todofield, nothing will happen when you click on the add button
    if(notEmpty){
        this.setState(
          prevState => {
            let {todoArray, todoText} = prevState;
            return {
              todoArray: todoArray.concat({key: todoArray.length, todoText: todoText}),
              todoText: ""
            };
          },
        //Save the state with asyncStorage
        () => Tasks.save(this.state.todoArray)
      );
    }
  }

  //Deletes todo when you click on the trash
  deleteTodo = i => {
    this.setState(
      prevState => {
          let todoArray = prevState.todoArray.slice();
          todoArray.splice(i, 1);

          //Updates the new state for the todoArray
          return {todoArray: todoArray};
        },
      //Saves the state with asyncStorage
      () => Tasks.save(this.state.todoArray)
    );
  };

  componentDidMount() {
  //To make the input field appear above the keyboard when the textfield for add todo is clicked
  Keyboard.addListener(
    isAndroid ? "keyboardDidShow" : "keyboardWillShow",
    e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
  );

  Keyboard.addListener(
    isAndroid ? "keyboardDidHide" : "keyboardWillHide",
    () => this.setState({ viewPadding: viewPadding })
  );

  //Sets the state based on what's saved with asyncstorage
  Tasks.all(todoArray => this.setState({ todoArray: todoArray || [] }));
}

render() {
   return (
     <View style={[styles.container, { paddingBottom: this.state.viewPadding }]}>
         <View style={styles.header}>
            <Text style={styles.headerText}> Todo </Text>
          </View>
             <FlatList
                style={styles.list}
                data={this.state.todoArray}
                renderItem={({ item, index }) =>(
                <View >
                    <View style={styles.listItemCont}>
                        <Text style={styles.listItem}>
                            {item.todoText}
                        </Text>
                        <Button light style={styles.mb15}
                            onPress={() => this.deleteTodo(index)}>
                            <Text uppercase={false} style={styles.text}>🗑️</Text>
                        </Button>
                    </View>
                </View>
                )}
                keyExtractor={(item) => item.toString()} />
            <TextInput
               style={styles.textInput}
               onChangeText={this.changeTextHandler}
               onSubmitEditing={this.addTodo}
               value={this.state.todoText}
               placeholder="Add Tasks"
               returnKeyType="done"
               returnKeyLabel="done"
               testID={'addTaskInput'}
           />
     </View>
    );
  }
}


let Tasks = {
  convertToArrayOfObject(todoArray, callback) {
    return callback(
      todoArray ? todoArray.split("||").map((todo, i) => ({ key: i, todoText: todo })) : []
    );
  },
  convertToStringWithSeparators(todoArray) {
    return todoArray.map(todo => todo.todoText).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, todoArray) =>
      this.convertToArrayOfObject(todoArray, callback)
    );
  },
  save(todoArray) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(todoArray));
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
    color: 'white',
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  },

  text: {
    fontSize: 20,
  },


});


AppRegistry.registerComponent("prosjekt3", () => Todo);
