import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {PrimaryButton} from './PrimaryButton';

storiesOf('Primary Button', module)
  .addDecorator(story => <View style={styles.decorator}>{story()}</View>)
  .add('with text', () => (
    <PrimaryButton
      content={text('Button content', 'Add to cart')}
      handlePress={action('clicked-text')}
    />
  ))
  .add('with some emoji', () => (
    <PrimaryButton
      content={<Text>😀 😎 👍 💯</Text>}
      handlePress={action('clicked-text')}
    />
  ));

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
  },
});
