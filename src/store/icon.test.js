import React from 'react';
import { Icon } from 'react-native-elements';
import renderer from 'react-test-renderer';

test('test Loading', () => {
  const component = renderer.create(<Icon name="access-time" />);
  console.log(component.toJSON());
  expect(true).toBe(true);
});
