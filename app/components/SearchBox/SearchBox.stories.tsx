import React from 'react';
import {View, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {SearchBox} from './SearchBox';

storiesOf('Search Box', module)
  .addDecorator(story => <View style={styles.decorator}>{story()}</View>)
  .add('default', () => <SearchBox />);

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
  },
});
