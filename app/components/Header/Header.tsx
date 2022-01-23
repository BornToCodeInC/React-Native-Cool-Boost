import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Header: React.FC<React.ReactNode>  = ({children}): JSX.Element => {
    return (
        <View
            style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#008ACE',
        height: 55,
    },
});