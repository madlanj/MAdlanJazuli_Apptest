import 'react-native';
import React from 'react';
import { ButtonBlue, ButtonRed, CardContact, InputText, Label, Loading } from '../src/component';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Button Blue', () => {
  const tree = renderer.create(<ButtonBlue />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Button Red', () => {
  const tree = renderer.create(<ButtonRed />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Card Contact', () => {
  const data = {
      "photo" : "https://sdfs", 
      "firstName" : "bayu",
      "lastName" : "air",
      "age" : 30
  }
  const tree = renderer.create(<CardContact 
    data={data}  />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders INput Text', () => {
  const tree = renderer.create(<InputText />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Label', () => {
  const tree = renderer.create(<Label />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Loading', () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});