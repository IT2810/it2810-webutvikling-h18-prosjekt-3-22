import React, { Component } from 'react';
import {Expo} from "expo";
import {Pedometer} from "expo";
import { Alert, StyleSheet, Text, View, TextInput} from 'react-native';
//import { AsyncStorage } from "react-native";

class Goal extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    stepGoal: 10000,
    newGoal: 0
  }

  componentDidMount(){
    this._subscribe();
  }

  componentWillUnmount(){
    this._unsubscribe();
  }

  _subscribe = () => {
    Pedometer.isAvailableAsync().then(
        result => {
          this.setState({
              isPedometerAvailable: String(result)
          });
        },
        error => {
          this.setState({
              isPedometerAvailable: "Could not get isPedometerAvailable: " + error
          });
        }
    );

    const end = new Date();
    const start = new Date(end.getFullYear(), end.getMonth(), end.getDay(), 0, 0, 0, 0);

    Pedometer.getStepCountAsync(start, end).then(
        result => {
          this.setState({
              pastStepCount: result.steps,
          },
        async () => {
            await AsyncStorage.setItem('Steps', result.steps);
        });
        },
        error => {
          this.setState({
              pastStepCount: "Could not get stepCount: " + error
          });
        }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  onSubmit = (inputValue) => {
      let numbers = '0123456789';

      for (var i=0; i < inputValue.length; i++) {
          // check if string contains only numbers
          if(!(numbers.indexOf(inputValue[i]) > -1 )) {
              alert("please enter numbers only");
              return
          }
      }

        // if string is not empty, change step goal
      if (inputValue != '') {
          this.setState({
              stepGoal: inputValue
          })
      }
  }

  render() {
      const stepsLeft = this.state.stepGoal - this.state.pastStepCount;
      const reachedGoal = <Text>You have reached your daily goal!</Text>;
      const notGoal = <Text>Walk {stepsLeft} steps to reach your goal.</Text>;

    let message;
    if (this.state.pastStepCount >= this.state.stepGoal){
        message = reachedGoal
    } else {
        message = notGoal
    };

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{padding: 10, fontSize: 42}}>Goal</Text>

          <Text>
              Steps taken today: {this.state.pastStepCount}/{this.state.stepGoal}
          </Text>

          <View>{message}</View>

          <Text style={{marginTop: 30}}>
              Set a new daily goal
          </Text>

          <TextInput style={{marginTop: 10, width: "80%", height: 50, borderColor: 'gray',
              borderWidth: 1, padding: 15, textAlign: "center"}}
            placeholder={"10 000"}
            onChangeText={newInput => {this.setState({newGoal: newInput})}}
            onSubmitEditing={() => this.onSubmit(this.state.newGoal)}
            clearButtonMode={"always"}
            >
          </TextInput>
      </View>
    );
  }
}

export default Goal;
