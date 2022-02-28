import React from 'react';
import {StyleSheet, Modal, Text, View, Pressable} from 'react-native';
import {Icon} from '../../components/icons/Icon';

interface Props {
  isVisible: boolean;
  dismiss: () => void;
  submit: () => void;
  title: string;
  submitButtonText: string;
  iconName: string;
  iconColor: string;
}

export const WarningModal: React.FC<Props> = ({
  isVisible,
  dismiss,
  submit,
  title,
  submitButtonText,
  iconName,
  iconColor,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={dismiss}>
        <View
          style={[
            {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              ...StyleSheet.absoluteFillObject,
            },
          ]}
        />
        <View style={styles.modal}>
          <Icon name={iconName} size={65} color={iconColor} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.warningButton]}
              onPress={dismiss}>
              <Text style={styles.buttonText}>CANCEL</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={submit}>
              <Text style={styles.buttonText}>{submitButtonText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 55,
    backgroundColor: '#E5E5E5',
  },
  modal: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
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
  buttonContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 125,
    backgroundColor: '#008ACE',
    paddingVertical: 15,
    borderRadius: 4,
  },
  warningButton: {
    backgroundColor: '#DD6B55',
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
