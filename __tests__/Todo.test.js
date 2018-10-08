import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Todo from '../src/components/todo.js';

let findElement = function (tree, element) {
  let result = undefined;
  //let pageStepGoal = tree.children[1].children[3];
  
  for (node in steps.children) {
    if (steps.children[node] == element) {
      result = true;
    }
  }
  return result;
}

/* let findInput = function (tree, element) {
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
} */

//creates snapshots from goal-component
describe('ToDo-page test', () => {
  const tree = renderer.create( <
    Todo / >
  ).toJSON();
  test('Take snapshot of todo-component', () => {
    expect(tree).toMatchSnapshot();
  });
  test('Verify that Add task-button is available', () => {
    console.log(tree)
    //expect(findElement(tree, stepGoal)).toBe(true);
  });
  /* test('Verify that steps taken today is 0', () => {
    let stepsToday = 0;
    expect(findSteps(tree, stepsToday)).toBe(true);
  });
  test('Check if inputbox is available', () => {
    expect(findInput(tree, 'goalInput')).toBe(true);
  }); */
});