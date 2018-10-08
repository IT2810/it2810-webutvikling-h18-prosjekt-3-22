import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../src/components/home.js';

//creates snapshots from home-component
describe('Take snapshot of home', () => {
    const snap = renderer.create( <
      Home / >
    ).toJSON();
    expect(snap).toMatchSnapshot();
});