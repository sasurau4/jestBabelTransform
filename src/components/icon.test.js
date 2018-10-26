import React from 'react';
// import { Badge } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import renderer from 'react-test-renderer';

test('test Loading', () => {
  // const component = renderer.create(<Badge value={3} />);
  const component = renderer.create(<Icon name="notifications" />);
  console.log(component.toJSON());
  expect(true).toBe(true);
});
