import React from 'react';
import {
    StatusBar,
    useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ProductDetailsScreen } from './app/screens/ProductDetailsScreen/ProductDetailsScreen';
import { ProductsProvider } from './app/contexts/ProductsContext';
import { Drawer } from './app/components/Drawer/Drawer';
import { OrderConfirmationScreen } from './app/screens/OrderConfirmationScreen/OrderConfirmationScreen';
import { LoginScreen } from './app/screens/LoginScreen/LoginScreen';


const { Navigator, Screen, Group } = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <ProductsProvider>
          <GestureHandlerRootView style={{flex:1}}>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <NavigationContainer>
                  <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                      <Group screenOptions={{presentation: 'transparentModal'}}>
                          <Screen name="Home" component={Drawer} />
                          <Screen name="Details" component={ProductDetailsScreen} />
                          <Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
                          <Screen name="Login" component={LoginScreen} />
                      </Group>
                  </Navigator>
              </NavigationContainer>
          </GestureHandlerRootView>
      </ProductsProvider>

  );
};

export default App;
