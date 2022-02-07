import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

interface Props {
    content: string | React.ReactNode;
    handlePress: () => void;
}


export const PrimaryButton: React.FC<Props> = ({ content, handlePress }): JSX.Element => {
    return (
        <Pressable
            style={styles.button}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{content}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#008ACE',
        paddingVertical: 15,
        borderRadius: 4,
        marginTop: 35,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 16,
        color: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        position: 'absolute',
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
});
