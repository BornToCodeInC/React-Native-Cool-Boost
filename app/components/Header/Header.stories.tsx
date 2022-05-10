import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { object, text, color, boolean } from '@storybook/addon-knobs';
import { Header } from './Header';

// export default {
//     title: 'components/Header',
//     component: Header,
// };
//
// export const Basic = () => (
//     <Header />
// );

// Basic.args = {};

storiesOf('Header', module)
    .addDecorator(story => <View style={s.decorator}>{story()}</View>)
    // 👇 you can add multiple variants of component, here's variant with name 'default'
    .add('default', () => (
        <Header>
            <Text>😀 😎 👍 💯</Text>
        </Header>
    ));

const s = StyleSheet.create({
    decorator: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});