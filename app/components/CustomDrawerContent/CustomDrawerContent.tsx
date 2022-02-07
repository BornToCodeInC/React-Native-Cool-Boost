import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, LogBox } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export const CustomDrawerContent: React.FC = (props: any): JSX.Element => {
    const { state, descriptors, navigation } = props;
    let lastGroupName = '';
    let newGroup = true;
    const lastRouteIndex = state.routes.length - 1;

    return (
        <SafeAreaView style={styles.sectionView}>
            <DrawerContentScrollView {...props}>
                <Text style={styles.drawerTitle}>Ecommerce Store</Text>
                {state.routes.map((route, index: number) => {
                    const {
                        drawerLabel,
                        drawerIcon,
                        activeTintColor,
                        groupName
                    } = descriptors[route.key].options;
                    if (lastGroupName !== groupName) {
                        newGroup = true;
                        lastGroupName = groupName;
                    } else newGroup = false;
                    return (
                        <View style={index < lastRouteIndex && styles.drawerContentGroup} key={uuid()}>
                            {newGroup ? (
                                <Text style={styles.drawerSubtitle}>
                                    {groupName}
                                </Text>
                            ) : null}
                            <DrawerItem
                                key={uuid()}
                                icon={drawerIcon}
                                label={
                                    () =>
                                        <Text style={styles.drawerLabel}>
                                            {drawerLabel}
                                        </Text>
                                }
                                focused={
                                    state.routes.findIndex(
                                        (e) => e.name === route.name
                                    ) === state.index
                                }
                                activeTintColor={activeTintColor}
                                onPress={() => navigation.navigate(route.name)}
                            />
                        </View>
                    );
                })}
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionView: {
        flex: 1,
        marginRight: 16,
        marginLeft: 20,
    },
    drawerTitle: {
        color: '#008ACE',
        fontWeight: '700',
        fontSize: 40,
        lineHeight: 50,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 48,
    },
    drawerSubtitle: {
        color: '#8F8F8F',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 25,
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 30,
    },
    drawerLabel: {
        color: '#4A4A4A',
        fontSize: 15,
        lineHeight: 20,
        marginBottom: 25,
        textAlign: 'center',
    },
    drawerContentGroup: {
        borderBottomColor: '#C3C3C3',
        borderBottomWidth: 1,
    },
});