import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../src/components/home.js';

let findElement = function (tree, element) {
  let result = undefined;
  let todoBtn = tree.children[0].children[1].children[0].props.testID;
  let goalBtn = tree.children[1].children[0].children[0].props.testID;
  for (node in tree.children) {
    if (todoBtn == element || goalBtn == element) {
      result = true;
    }
  }
  return result;
}

describe('Home-page test', () => {
  const tree = renderer.create( <
    Home / >
  ).toJSON();
//creates snapshots from home-component
  test('Take snapshot of home', () => {
    expect(tree).toMatchSnapshot();
  });
//tests if the buttons are there
  test('To do-button', () => {
    expect(findElement(tree, 'toDoBtn')).toBe(true);
  });
  test('Goal-button', () => {
    expect(findElement(tree, 'goalBtn')).toBe(true);

  });
});