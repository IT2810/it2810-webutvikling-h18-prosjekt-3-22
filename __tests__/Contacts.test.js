import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Contacts from '../src/components/contactHome.js';

/* let findSteps = function (tree, element) {
  let result = undefined;
  let steps = tree.children[2].children[0];
  for (node in steps.children) {
    if (steps.children[node] == element) {
      result = true;
    }
  }
  return result;
}

let findInput = function (tree, element) {
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
} */

describe('Contact-page test', () => {
  const tree = renderer.create( <
    Contacts / >
  ).toJSON();

  test('Take snapshot of goal-component', async () => {
    await expect(tree).toMatchSnapshot();
  });
/*   test('Verify that stepgoal is 10000', () => {
    let stepGoal = 10000;
    expect(findSteps(tree, stepGoal)).toBe(true);
  });
  test('Verify that steps taken today is 0', () => {
    let stepsToday = 0;
    expect(findSteps(tree, stepsToday)).toBe(true);
  });
  test('Check if inputbox is available', () => {
    expect(findInput(tree, 'goalInput')).toBe(true);
  }); */
});