import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {SearchBox} from '../app/components/SearchBox/SearchBox';

describe('SearchBox.tsx', () => {
  test('renders correctly', () => {
    const {toJSON} = render(<SearchBox />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('should trigger search on button press', async () => {
    const handler = jest.fn();
    const {findByRole} = render(<SearchBox handleSubmit={handler} />);
    const btn = await findByRole('button');
    fireEvent.press(btn);
    expect(handler).toHaveBeenCalled();
  });
});
