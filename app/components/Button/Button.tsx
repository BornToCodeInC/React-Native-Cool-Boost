import React, {PropsWithChildren} from 'react';
import {TouchableHighlight} from 'react-native';

interface Props {
  handlePress: () => void;
}

type ButtonProps = PropsWithChildren<Props>;

export const Button = ({handlePress, children}: ButtonProps) => {
  return (
    <TouchableHighlight onPress={handlePress}>{children}</TouchableHighlight>
  );
};
