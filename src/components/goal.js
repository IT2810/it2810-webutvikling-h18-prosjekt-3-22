import React, { Component } from 'react';
import {Expo} from "expo";
import {Pedometer} from "expo";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { AsyncStorage } from "react-native";

class Goal extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    stepGoal: 10000,
    newGoal: 0,
    reached: false
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

    //get number of steps walked today
      this.getSteps()

    //get step goal
      this.getStepGoal()
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  getSteps = () => {
      const end = new Date();
      const start = new Date();
      start.setHours(0,0,0,0);

      Pedometer.getStepCountAsync(start, end).then(
          result => {
              this.setState({
                  pastStepCount: result.steps,
              });
          }
      );
  }

  // fires when a new goal is set by user
  onSubmit = (inputValue) => {
      let numbers = '0123456789';

      // check if string contains only numbers
      for (var i=0; i < inputValue.length; i++) {
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

          this.saveGoal(inputValue)
      }
  }

  //save goal with asyncStorage
  saveGoal = (goal) => {

    const saveStepGoal = async stepGoal => {
        try {
            await AsyncStorage.setItem('stepGoal', stepGoal);

        } catch (error) {
            alert(error.message);
        }
        };

        saveStepGoal(goal)
    };

    //get saved goal with asyncStorage
    getStepGoal = () => {
        const getStepGoal = async () => {
            let stepGoal = '';
            try {
                stepGoal = await AsyncStorage.getItem('stepGoal') || '10000';
                this.setState({
                  stepGoal: stepGoal
                })
            } catch (error) {
                alert(error.message);
            }
            return stepGoal;
        };
        getStepGoal(this);
    };

  render() {
      const stepsLeft = this.state.stepGoal - this.state.pastStepCount;
      const reachedGoal = <Text style={styles.text}>You have reached your daily goal!</Text>;
      const notGoal = <Text style={styles.text}>Walk {stepsLeft} steps to reach your goal.</Text>;

    let message;
    if (this.state.pastStepCount >= this.state.stepGoal){
        message = reachedGoal;
        this.state.reached = true;
    } else {
        message = notGoal;
        this.state.reached = false;
    };

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.header}>
              <Text style={styles.headerText}> Goal </Text>
          </View>

          <View>
              <Text style={styles.text}>
                  Steps taken today
              </Text>
          </View>

          <View style={[styles.circleView, this.state.reached && styles.circleGreen]}>
              <Text style={{marginBottom: 10}}>
                  {this.state.pastStepCount}/{this.state.stepGoal}
              </Text>
          </View>

          <View>{message}</View>

          <Text style={{marginTop: 60}}>
              Set a new daily goal
          </Text>

          <TextInput style={{marginTop: 10, width: "80%", height: 50, borderColor: 'gray',
              borderWidth: 1, padding: 15, textAlign: "center"}}
            placeholder={"10 000 steps"}
            onChangeText={newInput => {this.setState({newGoal: newInput})}}
            onSubmitEditing={() => this.onSubmit(this.state.newGoal)}
            clearButtonMode={"always"}
            >
          </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4d79ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: "#ddd",
        width: '100%'
    },

    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },

    circleView: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: 'skyblue'
    },

    circleGreen: {
        backgroundColor: '#7ED957'
    },

    text: {
        marginTop: 20
    }
});

export default Goal;
