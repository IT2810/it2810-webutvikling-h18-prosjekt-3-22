import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../src/components/home.js';

let findButton = function (tree, element) {
  let result = undefined;
  let todoBtn = tree.children[0].children[1].children[0].props.testID;
  let goalBtn = tree.children[1].children[0].children[0].props.testID;
    if (todoBtn == element || goalBtn == element) {
      result = true;
    }
  return result;
}

describe('Home-page test', () => {
  const tree = renderer.create( <
    Home / >
  ).toJSON();
  test('Take snapshot of home', () => {
    expect(tree).toMatchSnapshot();
  });
  test('To do-button', () => {
    expect(findButton(tree, 'toDoBtn')).toBe(true);
  });
  test('Goal-button', () => {
    expect(findButton(tree, 'goalBtn')).toBe(true);
  });
});