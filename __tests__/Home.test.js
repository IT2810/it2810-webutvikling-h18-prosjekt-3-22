import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'

import Home from '../src/components/home.js';
import Todo from '../src/components/todo.js';
import Goal from '../src/components/goal.js';

//const sum = require('../src/components/testen.js');

//test to see if tests are working
/*describe('Sum test', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});*/

//creates snapshots from home-component
//need to write 'npm test -- -u' to update to new snapshot
describe('Make snapshots', () => {
  it('Home page snapshot', () => {
    const snap = renderer.create( <
      Home / >
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

describe('Find elements in home page', () => {
  let findElement = function (tree, element) {
    console.warn(tree.props);
    let result = undefined;
    //for (node in tree.children) {
    if (tree.children.props.testID == element) {
      result = true;
      //}
    }
    return result;
    //  return true;
  }
  it('Find the To Do- and the Home-button', () => {
    let tree = renderer.create( <
      Home / >
    ).toJSON();
    expect(findElement(tree, 'toDoBtn')).toBeDefined();
    expect(findElement(tree, 'goalBtn')).toBeDefined();

  });

  /*   it('Find the Goal-button', () => {
      const tree = renderer.create( <
        Home / >
      ).toJSON();
      expect(findElement(tree, 'goalBtn')).toBeDefined();
    }); */


});


/* describe('Home page test', () => {
    beforeEach(() => {
      // check that you actually are on the home page
      // expect that there are two buttons - todo and goals
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