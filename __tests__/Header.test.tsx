import 'react-native';
import React from 'react';
import { Header } from '../app/components/Header/Header';
import { render, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Header.test.tsx', () => {
    test('renders correctly', () => {
        const component = render(<Header/>);
        const snapshot = component.toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    test('should render properly content', async () => {
        const { getByText } = render(<Header><Text>Internal</Text></Header>);
        await waitFor(() => expect(getByText('Internal')).toBeTruthy());
    });
})

