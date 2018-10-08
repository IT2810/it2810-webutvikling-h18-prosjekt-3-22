import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Todo from '../src/components/todo.js';

//creates snapshots from todo-component
test('Take snapshot of ToDo', () => {
  const snap = renderer.create( <
    Todo / >
  ).toJSON();
  expect(snap).toMatchSnapshot();
});