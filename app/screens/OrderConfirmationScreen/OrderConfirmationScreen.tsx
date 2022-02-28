import React from 'react';
import {StyleSheet, Image, Text, SafeAreaView, ScrollView} from 'react-native';
import {Fireworks} from '../../components/Fireworks/Fireworks';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';

export const OrderConfirmationScreen: React.FC = ({
  route,
  navigation,
}): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Fireworks />
        <Text style={styles.title}>Order Confirmation</Text>
        <Image source={require('../../../assets/images/box.png')} />
        <Text style={styles.subtitle}>
          Thank you for placing your order with us!
        </Text>
        <Text style={styles.description}>
          Please check your email for more details. For any questions and
          further information please contact our customer support.
        </Text>
        <PrimaryButton content={'continue shopping'} handlePress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
