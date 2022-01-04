import React from 'react';
import { View, TextInput } from 'react-native';
import { IconSearch } from '../icons/IconSearch';

export const SearchBox: React.FC = (): JSX.Element => {
    return (
        <View
            style={{
                height: 55
            }}>
            <IconSearch
                fill={'#8F8F8F'}
            />
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
            />
        </View>
    );
}
