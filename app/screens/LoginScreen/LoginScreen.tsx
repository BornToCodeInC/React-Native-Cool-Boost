import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {Header} from '../../components/Header/Header';
import {IconArrowLeft} from '../../components/icons/IconArrowLeft';
import {LoadingAnimation} from '../../components/LoadingAnimation/LoadingAnimation';

export const LoginScreen: React.FC = ({route, navigation}): JSX.Element => {
  console.log(route);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <IconArrowLeft fill={'#FFFFFF'} />
        </Pressable>
        <Text style={styles.headerTitle}>{route.name}</Text>
      </Header>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={require('../../../assets/images/avatar.png')} />
        <Text style={styles.subtitle}>Login First!</Text>
        <Text style={styles.description}>Login first to view your cart</Text>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <PrimaryButton
            content={'Login now'}
            handlePress={() => {
              setIsLoading(!isLoading);
              navigation.navigate('SignIn');
            }}
          />
        )}

        <Pressable
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>New here? Sign Up</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 24,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#00A8F3',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    marginVertical: 10,
    marginBottom: 40,
  },
  subtitle: {
    color: '#8F8F8F',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
    marginTop: 35,
  },
  description: {
    color: '#8F8F8F',
    fontSize: 15,
    lineHeight: 20,
    marginVertical: 10,
    textAlign: 'center',
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
