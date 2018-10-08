import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Goal from '../src/components/goal.js';

//creates snapshots from goal-component
test('Take snapshot of Goal', () => {
  const snap = renderer.create( <
    Goal / >
  ).toJSON();
  expect(snap).toMatchSnapshot();
});