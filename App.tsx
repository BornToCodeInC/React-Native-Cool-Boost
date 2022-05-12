import React, { useContext, useState } from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ProductDetailsScreen} from './app/screens/ProductDetailsScreen/ProductDetailsScreen';
import {ProductsProvider} from './app/contexts/ProductsContext';
import {Drawer} from './app/components/Drawer/Drawer';
import {OrderConfirmationScreen} from './app/screens/OrderConfirmationScreen/OrderConfirmationScreen';
import {LoginScreen} from './app/screens/LoginScreen/LoginScreen';
import {ProfileScreen} from './app/screens/ProfileScreen/ProfileScreen';
import {AuthContext, AuthProvider} from './app/contexts/AuthContext';
import {SignInScreen} from './app/screens/SignInScreen/SignInScreen';
import {SignUpScreen} from './app/screens/SignUpScreen/SignUpScreen';
import {SearchScreen} from './app/screens/SearchScreen/SearchScreen';

const {Navigator, Screen, Group} = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {state} = useContext(AuthContext);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AuthProvider>
          <ProductsProvider>
            <Navigator
              initialRouteName="SignIn"
              screenOptions={{headerShown: false}}>
              {state.userToken == null ? (
                <Group screenOptions={{headerShown: false}}>
                  <Screen name="SignIn" component={SignInScreen} />
                  <Screen name="SignUp" component={SignUpScreen} />
                </Group>
              ) : (
                <Group screenOptions={{presentation: 'transparentModal'}}>
                  <Screen
                    name="OrderConfirmation"
                    component={OrderConfirmationScreen}
                  />
                  <Screen name="Profile" component={ProfileScreen} />
                </Group>
              )}
              <Screen name="Drawer" component={Drawer} />
              <Group screenOptions={{presentation: 'transparentModal'}}>
                <Screen name="Login" component={LoginScreen} />
              </Group>
              <Screen name="Details" component={ProductDetailsScreen} />
              <Screen name="Search" component={SearchScreen} />
              {/*<Screen name='SignIn' component={SignInScreen} />*/}
            </Navigator>
          </ProductsProvider>
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
