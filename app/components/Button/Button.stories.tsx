import React from 'react';
import {View, Text} from 'react-native';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';

storiesOf('Button', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('with text', () => (
    <Button handlePress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button handlePress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
