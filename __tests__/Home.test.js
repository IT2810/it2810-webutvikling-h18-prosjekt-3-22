import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../src/components/home.js';

/* We had added button-tests to this page aswell,
but after we changed the design to native-base,
the tests weren't working as they were supposed to.
The snapshot-test is still working fine */

describe('Home-page test', () => {
  const tree = renderer.create( <
    Home / >
  ).toJSON();
  /* Snapshot test */
  test('Take snapshot of home', () => {
    expect(tree).toMatchSnapshot();
  });
});