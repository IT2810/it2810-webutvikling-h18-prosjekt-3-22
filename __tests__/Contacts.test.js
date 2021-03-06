import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Contacts from '../src/components/contactHome.js';

let findElement = function (tree, element) {
  let result = undefined;
  let addContactBtn = tree.children[2].children[0].props.testID;
  if (addContactBtn == element) {
    result = true;
  }
  return result;
}

/* Finds inputfields for name and number-input */
let findInputFields = function (tree, element) {
  let result = undefined;
  let steps = tree.children[1].children[0].children[1];
  for (node in steps.children) {
    if (steps.children[node].children[0].props.testID == element) {
      result = true;
    }
  }
  return result;
}

/* Finds button */
let findButton = function (tree, element) {
  let result = undefined;
  let steps = tree.children[1].children[0].children[2];
  for (node in steps.children) {
    if (steps.children[node].children[0].props.testID == element) {
      result = true;
    }
  }
  return result;
}

describe('Contact-page test', () => {
  const tree = renderer.create( <
    Contacts / >
  ).toJSON();
  /*Snapshot-test*/
  test('Take snapshot of contacts-component', async () => {
    await expect(tree).toMatchSnapshot();
  });
  /*Tests to verify that the buttons and input-fields on the page are visible*/
  test('Verify that "Add Contact" Button is visible', () => {
    expect(findElement(tree, 'addContactBtn')).toBe(true);
  });
  test('Verify that all the input-fields are visible', () => {
    expect(findInputFields(tree, 'nameInput')).toBe(true);
    expect(findInputFields(tree, 'numberInput')).toBe(true);
  });
  test('Verify that the "Close" and "Save" buttons are visible', () => {
    expect(findButton(tree, 'closeBtn')).toBe(true);
    expect(findButton(tree, 'saveBtn')).toBe(true);
  });
});