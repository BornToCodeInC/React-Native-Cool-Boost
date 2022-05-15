import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {PrimaryButton} from '../app/components/PrimaryButton/PrimaryButton';

describe('SearchBox.tsx', () => {
  test('renders correctly', () => {
    const handler = jest.fn();
    const {toJSON} = render(
      <PrimaryButton content="Submit" handlePress={handler} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should trigger handler on button press', async () => {
    const handler = jest.fn();
    const {findByText} = render(
      <PrimaryButton content="Submit" handlePress={handler} />,
    );
    const btn = await findByText('Submit');
    fireEvent.press(btn);
    expect(handler).toHaveBeenCalled();
  });
});
