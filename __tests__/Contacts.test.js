import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Contacts from '../src/components/contactHome.js';

let findElement = function (tree, element) {
  let result = undefined;
  let addContactBtn = tree.children[2].props.testID;
  if (addContactBtn == element) {
    result = true;
  }
  return result;
}

let findInputFields = function (tree, element) {
  let result = undefined;
  /* let nameInput = tree.children[1].children[0].children[1].children[0].children[0].props.testID;
    let numberInput = tree.children[1].children[0].children[1].children[1].children[0].props.testID;
    let mailInput = tree.children[1].children[0].children[1].children[2].children[0].props.testID */
  let steps = tree.children[1].children[0].children[1];
  for (node in steps.children) {
    if (steps.children[node].children[0].props.testID == element) {
      result = true;
    }
  }
  return result;
}

let findButton = function (tree, element) {
  let result = undefined;
  /* let saveBtn = tree.children[1].children[0].children[2].children[1].props.testID;
  let closeBtn = tree.children[1].children[0].children[2].children[0].props.testID; */
  let steps = tree.children[1].children[0].children[2];
  for (node in steps.children) {
    if (steps.children[node].props.testID == element) {
      result = true;
    }
  }
  return result;
}


describe('Contact-page test', () => {
  const tree = renderer.create( <
    Contacts / >
  ).toJSON();
  test('Take snapshot of contacts-component', async () => {
    await expect(tree).toMatchSnapshot();
  });
  test('Verify that "Add Contact" Button is visible', () => {
    expect(findElement(tree, 'addContactBtn')).toBe(true);
  });
  test('Verify that all the input-fields are visible', () => {
    expect(findInputFields(tree, 'nameInput')).toBe(true);
    expect(findInputFields(tree, 'numberInput')).toBe(true);
    expect(findInputFields(tree, 'mailInput')).toBe(true);
  });
  test('Verify that the "Close" and "Save" buttons are visible', () => {
    expect(findButton(tree, 'closeBtn')).toBe(true);
    expect(findButton(tree, 'saveBtn')).toBe(true);
  });
});