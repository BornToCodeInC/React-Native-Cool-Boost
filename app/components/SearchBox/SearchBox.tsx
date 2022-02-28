import React, {RefObject, useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {IconSearch} from '../icons/IconSearch';

interface Props {
  handleSubmit?: (text: string) => void;
  searchInputValue?: string;
  searchInputRef?: RefObject<TextInput>;
}

export const SearchBox: React.FC<Props> = ({
  handleSubmit,
  searchInputValue,
  searchInputRef,
}): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState(searchInputValue || '');
  const handlePress = () => {
    handleSubmit && handleSubmit(searchQuery);
  };
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.searchButton}
        onPress={() => handleSubmit && handleSubmit(searchQuery)}>
        <IconSearch fill={'#8F8F8F'} />
      </Pressable>
      <TextInput
        style={styles.inputContainer}
        ref={searchInputRef}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  searchButton: {
    position: 'absolute',
    top: 20,
    paddingHorizontal: 5,
    zIndex: 1,
  },
  inputContainer: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 25,
  },
});
