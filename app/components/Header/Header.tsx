import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Header: React.FC<React.ReactNode> = ({children}): JSX.Element => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#008ACE',
    width: '100%',
    minHeight: 55,
    zIndex: 1,
  },
});
