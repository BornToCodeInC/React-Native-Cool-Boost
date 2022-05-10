import React, { useState, useContext, useCallback } from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {signUp} from '../../actions/AuthAction';
import {AuthContext} from '../../contexts/AuthContext';
import {InputWithLabel} from '../../components/InputWithLabel/InputWithLabel';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import { useFocusEffect } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';

export const SignUpScreen: React.FC = ({navigation}): JSX.Element => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const {dispatch} = useContext(AuthContext);

    useFocusEffect(
        useCallback(() => {
            Analytics.trackEvent('SignUp Screen is opened');
        }, [])
    );

  const handleSubmit = async () => {
    if (
      username &&
      email &&
      password &&
      passwordConfirmation &&
      password === passwordConfirmation
    ) {
      await signUp(dispatch, {username, email, password});
      navigation.navigate('Drawer');
    }
  };
  return (
    <View style={styles.container}>
      <InputWithLabel
        labelText="Full Name"
        value={username}
        handleChange={setUsername}
        extraStyle={styles.input}
      />
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
      <InputWithLabel
        labelText="Confirm Password"
        value={passwordConfirmation}
        handleChange={setPasswordConfirmation}
        isSecure={true}
        extraStyle={styles.input}
      />
      <PrimaryButton content="SIGN UP" handlePress={handleSubmit} />
      <Pressable
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Already have account? Sign In</Text>
      </Pressable>
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
