import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

interface Props {
  labelText: string;
  value: string;
  handleChange?: (text: string) => void;
  isSecure?: boolean;
  extraStyle?: any;
}

export const InputWithLabel: React.FC<Props> = ({
  labelText,
  value,
  handleChange,
  isSecure = false,
  extraStyle,
}): JSX.Element => {
  return (
    <View style={{...styles.textField, ...extraStyle}}>
      <Text style={styles.labelText}>{labelText}</Text>
      <TextInput
        style={styles.inputContainer}
        value={value}
        onChangeText={handleChange}
        placeholder={'Text'}
        placeholderTextColor={'#8F8F8F'}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    width: '100%',
  },
  labelText: {
    position: 'absolute',
    top: -10,
    zIndex: 1,
    marginLeft: 15,
    paddingHorizontal: 4,
    fontSize: 12,
    lineHeight: 16,
    backgroundColor: '#FFFFFF',
    color: '#4A4A4A',
  },
  inputContainer: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 15,
    borderRadius: 5,
  },
});
