import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Todo from '../src/components/todo.js';

let findElement = function (tree, element) {
  let result = undefined;
  for (node in tree.children) {
    if (tree.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
}

describe('ToDo-page test', () => {
  const tree = renderer.create( <
    Todo / >
  ).toJSON();
  test('Take snapshot of todo-component', () => {
    expect(tree).toMatchSnapshot();
  });
  test('Verify that Add task-button is available', async () => {
    //await console.log(tree.children[1].props.testID)
    expect(findElement(tree, 'addTaskInput')).toBe(true);
  });

});