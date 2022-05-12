import React, { useState, useContext, useCallback } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {signIn} from '../../actions/AuthAction';
import {AuthContext} from '../../contexts/AuthContext';
import {InputWithLabel} from '../../components/InputWithLabel/InputWithLabel';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {WarningModal} from '../WarningModal/WarningModal';
import { useFocusEffect } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';

export const SignInScreen: React.FC = ({navigation}): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {state, dispatch} = useContext(AuthContext);

  useFocusEffect(
      useCallback(() => {
        Analytics.trackEvent('SignIn Screen is opened');
      }, [])
  );

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => setModalVisible(false);

  const handleSubmit = async () => {
    if (email && password) {
      const a = await signIn(dispatch, {email, password});
      state.userToken ? navigation.navigate('Drawer') : showModal();
    }
  };

  const handleSignUp = async () => {
    hideModal();
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <InputWithLabel
        labelText="Email Address"
        value={email}
        handleChange={setEmail}
        extraStyle={styles.input}
      />
      <InputWithLabel
        labelText="Password"
        value={password}
        handleChange={setPassword}
        isSecure={true}
        extraStyle={styles.input}
      />
      <PrimaryButton content="SIGN IN" handlePress={handleSubmit} />
      <Pressable
        onPress={() => {
          navigation.navigate('SignUp');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>New here? Sign Up</Text>
      </Pressable>
      <WarningModal
        isVisible={modalVisible}
        dismiss={hideModal}
        submit={handleSignUp}
        title={
          'Incorrect Email or Password! Try again or press SIGN UP button to create an account'
        }
        submitButtonText={'SIGN UP'}
        iconName={'exclamation-circle'}
        iconColor={'#FEB96B'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    marginVertical: 15,
  },
  button: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    color: '#00A8F3',
  },
});
