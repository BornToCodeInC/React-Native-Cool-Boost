import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetailsScreen } from './app/screens/ProductDetailsScreen/ProductDetailsScreen';
import { ProductsProvider } from './app/contexts/ProductsContext';
import { Drawer } from './app/components/Drawer/Drawer';


const { Navigator, Screen, Group } = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
      <ProductsProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
              <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                  <Group>
                      <Screen name="Home" component={Drawer} />
                      <Screen name="Details" component={ProductDetailsScreen} />
                  </Group>
              </Navigator>
          </NavigationContainer>
      </SafeAreaView>
      </ProductsProvider>

  );
};

export default App;
