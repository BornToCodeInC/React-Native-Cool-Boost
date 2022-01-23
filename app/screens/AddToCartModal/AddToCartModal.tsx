import React from 'react';
import { StyleSheet, Modal, Text, View, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icon } from '../../components/icons/Icon';

interface Props {
    isVisible: boolean,
    dismiss: () => void,
    title: string,
    iconName: string,
    iconColor: string,
    description?: string,
}

export const AddToCartModal: React.FC<Props> = (
    { isVisible,
        dismiss,
        title,
        iconName,
        iconColor,
        description = ''
    }): JSX.Element => {
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={dismiss}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPressOut={dismiss}
                >
                    <TouchableWithoutFeedback>
                        <View style={styles.modal}>
                            <Icon
                                name={iconName}
                                size={65}
                                color={iconColor}
                            />
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                            <Pressable style={styles.button} onPress={dismiss}>
                                <Text style={styles.buttonText}>OK</Text>
                            </Pressable>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 55,
        backgroundColor: '#E5E5E5'
    },
    modal: {
        margin: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        color: '#8F8F8F',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 25,
        marginVertical: 10,
    },
    description: {
        color: '#8F8F8F',
        fontSize: 15,
        lineHeight: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    button: {
        width: 125,
        backgroundColor: '#008ACE',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 16,
        color: '#FFFFFF',
    },
});
