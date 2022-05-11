import 'react-native';
import React from 'react';
import {Header} from '../app/components/Header/Header';
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
    render(<Header/>);
});
