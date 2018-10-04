import 'react-native';
import React from 'react';
//import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'

import Home from '../src/components/home.js';
import Todo from '../src/components/todo.js';
import Goal from '../src/components/goal.js';

const sum = require('../src/components/testen');

//test to see if tests are working
/*describe('Sum test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});*/

//creates snapshots from home-component
//need to write 'npm test -- -u' to update to new snapshot
test ('Home snapshot', () => {
  const snap = renderer.create(
    <Home />
  ).toJSON();
expect(snap).toMatchSnapshot();
});

/* describe('Home page test', () => {
    beforeEach(() => {
      //check that you actually are on the home page
      initializeCityDatabase();
      expect()
    });
}); */


/*
describe('Test rendering', () => {
it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(toJson(wrapper)).toMatchSnapshot();
  });
});
}); */