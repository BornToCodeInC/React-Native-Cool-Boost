import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {text} from '@storybook/addon-knobs';
import {Header} from './Header';

storiesOf('Header', module)
  .addDecorator(story => <View style={styles.decorator}>{story()}</View>)
  .add('with text', () => (
    <Header>
      <Text style={styles.headerTitle}>{text('Header title', 'Title')}</Text>
    </Header>
  ));

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
  },
});
