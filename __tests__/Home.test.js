import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../src/components/home.js';

let findButton = function (tree, element) {
  let result = undefined;
    let todoBtn = tree.children[1].children[0].children[0].props.testID;
    let goalBtn = tree.children[2].children[0].children[0].props.testID;
    let contactsBtn = tree.children[3].children[0].children[0].props.testID;

// for some reason, this is not working, which means I have to make shortcuts with hardcoding
/*  for (node in tree.children) {
    let path = tree.children[node+1].children[0].children[0].props.testID;
    if (path == element) { 
      result = true;
    } 
*/

      if (todoBtn == element || goalBtn == element || contactsBtn == element) {
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
  test('Contacts-button', () => {
    expect(findButton(tree, 'contactsBtn')).toBe(true);
  });
});