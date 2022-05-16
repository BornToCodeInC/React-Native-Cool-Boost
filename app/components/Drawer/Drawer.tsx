import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {ProductListScreen} from '../../screens/ProductListScreen/ProductListScreen';
import {CustomDrawerContent} from '../CustomDrawerContent/CustomDrawerContent';
import {Icon} from '../icons/Icon';
import {OrderConfirmationScreen} from '../../screens/OrderConfirmationScreen/OrderConfirmationScreen';
import {LoginScreen} from '../../screens/LoginScreen/LoginScreen';
import {ProfileScreen} from '../../screens/ProfileScreen/ProfileScreen';

const {Navigator, Screen} = createDrawerNavigator();

function Article() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Article Screen</Text>
    </View>
  );
}

export const Drawer: React.FC = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.4)',
        drawerStyle: {width: '80%'},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="ProductListScreen">
      <Screen
        name="My profile"
        component={ProfileScreen}
        options={{
          groupName: 'My Account',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'My Profile',
          drawerIcon: ({focused}) => (
            <Icon
              name={'user'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
      <Screen
        name="ProductListScreen"
        component={ProductListScreen}
        options={{
          title: 'Home',
          groupName: 'My Account',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'My Wish List',
          drawerIcon: ({focused}) => (
            <Icon
              name={'heart'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
      <Screen
        name="My Cart"
        component={LoginScreen}
        options={{
          groupName: 'My Account',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'My Cart',
          drawerIcon: ({focused}) => (
            <Icon
              name={'shopping-cart'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
      <Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
        options={{
          groupName: 'My Account',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'My Orders',
          drawerIcon: ({focused}) => (
            <Icon
              name={'shopping-cart'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
      <Screen
        name="Support"
        component={Article}
        options={{
          title: 'Home',
          groupName: 'Support',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'Email',
          drawerIcon: ({focused}) => (
            <Icon
              name={'envelope'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
      <Screen
        name="Support1"
        component={Article}
        options={{
          groupName: 'Support',
          activeTintColor: '#8ED8F8',
          drawerLabel: 'Call',
          drawerIcon: ({focused}) => (
            <Icon
              name={'phone-alt'}
              size={17}
              color={focused ? '#7CC' : '#008ACE'}
            />
          ),
        }}
      />
    </Navigator>
  );
};
