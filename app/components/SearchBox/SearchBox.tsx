import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconSearch } from '../icons/IconSearch';

export const SearchBox: React.FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <IconSearch
                fill={'#8F8F8F'}
            />
            <TextInput style={styles.inputContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 55,
    },
    inputContainer: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
});
