import React, { Component } from 'react';
import {Expo} from "expo";
import {Pedometer} from "expo";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



class Goal extends Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0
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

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Goal</Text>

          <Text>
              Steps taken today: {this.state.pastStepCount}
          </Text>

      </View>
    );
  }
}

export default Goal;
