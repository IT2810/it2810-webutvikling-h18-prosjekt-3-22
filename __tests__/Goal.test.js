import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Goal from '../src/components/goal.js';

/* Finds the elements where it says how many steps are taken that day, and your goal */
let findSteps = function (tree, element) {
  let result = undefined;
  let steps = tree.children[2].children[0];
  for (node in steps.children) {
    if (steps.children[node] == element) {
      result = true;
    }
  }
  return result;
}

/* Finds the inputbox */
let findInput = function (tree, element) {
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
}

describe('Goal-page test', () => {
  const tree = renderer.create( <
    Goal / >
  ).toJSON();
  /* Snapshot-test */
  test('Take snapshot of goal-component', () => {
    expect(tree).toMatchSnapshot();
  });
  /* Test to verify that the stepgoal is 10 000 before you set your own goal*/
  test('Verify that stepgoal is 10000', () => {
    let stepGoal = 10000;
    expect(findSteps(tree, stepGoal)).toBe(true);
  });
  /* Test to verify that the steps taken today starts with 0 */
  test('Verify that steps taken today is 0', () => {
    let stepsToday = 0;
    expect(findSteps(tree, stepsToday)).toBe(true);
  });
  /* Test to verify that the inputbox where you input goal is available */
  test('Check if inputbox is available', () => {
    expect(findInput(tree, 'goalInput')).toBe(true);
  });
});