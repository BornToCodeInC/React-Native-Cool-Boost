import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet } from 'react-native';
import { ProductListScreen } from '../../screens/ProductListScreen/ProductListScreen';
import { CustomDrawerContent } from '../CustomDrawerContent/CustomDrawerContent';
import { Icon } from '../icons/Icon';

const { Navigator, Screen } = createDrawerNavigator();

function Article() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Article Screen</Text>
        </View>
    );
}

export const Drawer: React.FC = (): JSX.Element => {
    return (
        <Navigator screenOptions={{headerShown: false, overlayColor: 'rgba(0, 0, 0, 0.4)', drawerStyle: { width: '80%' }}} drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Screen name="Main" component={ProductListScreen}
                    options={{
                        title: 'Home',
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
            <Screen name="Main1" component={ProductListScreen}
                    options={{
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
            <Screen name="Main2" component={ProductListScreen}
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
            <Screen name="Main3" component={ProductListScreen}
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
            <Screen name="Support" component={Article}
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
            <Screen name="Support1" component={Article}
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
            <Screen name="Share" component={Article}
                    options={{
                        groupName: '',
                        activeTintColor: '#8ED8F8',
                        drawerLabel: 'Share',
                        drawerIcon: ({focused}) => (
                            <Icon
                                name={'share-alt'}
                                size={17}
                                color={focused ? '#7CC' : '#008ACE'}
                            />
                        ),
                    }}
            />
        </Navigator>
    );
};
