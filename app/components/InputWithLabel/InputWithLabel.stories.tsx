import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { InputWithLabel } from './InputWithLabel';

storiesOf('Input With Label', module)
    .addDecorator(story => <View style={styles.decorator}>{story()}</View>)
    .add('default', () => (
        <InputWithLabel labelText={text('Label text', 'Name')} value='' />
    ))
    .add('with text', () => (
        <InputWithLabel labelText={text('Label text', 'Name')} value={text('Value', 'John')} />
    ));

const styles = StyleSheet.create({
    decorator: {
        flex: 1,
        justifyContent: 'center',
    }
});
