import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView, Button, Alert, RefreshControl } from 'react-native';
import { Header } from '../../components/Header/Header';
import { IconBasket } from '../../components/icons/IconBasket';
import { IconHeart } from '../../components/icons/IconHeart';
import { IconArrowLeft } from '../../components/icons/IconArrowLeft';

export const ProductDetailsScreen: React.FC = (): JSX.Element => {
    const [refreshing, setRefreshing] = useState(false);
    const product = {
        attributes: {
            price: '86.99',
            description: 'Doloremque ab accusamus blanditiis et. Deleniti ma…oloribus ad. Non repellat maiores delectus rerum.',
            name: 'Raw Edge T Shirt'
        },
        id: '16'
    };

    const wait = (timeout: number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
    <SafeAreaView>
        <ScrollView
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <Header>
                <View>
                    <IconArrowLeft fill={'#FFFFFF'} />
                </View>
                <View style={styles.headerIcons}>
                    <IconHeart fill={'#FFFFFF'} />
                    <View style={styles.headerIconRight}>
                        <IconBasket fill={'#FFFFFF'} />
                    </View>
                </View>
            </Header>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: `https://picsum.photos/id/${product.id}/250`}}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellValue}>{product.attributes.name}</Text>
                    <Text style={styles.cellTitle}>{product.attributes.price}</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellTitle}>Select color</Text>
                    <View style={styles.btn}>
                        <Button
                            title="Blue"
                            disabled
                            onPress={() => Alert.alert('Cannot press this one')}
                        />
                    </View>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellTitle}>Description</Text>
                    <Text style={styles.cellValue}>{product.attributes.description}</Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.container}>
            <View style={styles.mainBtn}>
                <Button
                    title="Add to cart"
                    onPress={() => Alert.alert('Cannot press this one')}
                />
            </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    headerIconRight: {
        paddingLeft: 30,
    },
    headerIcons: {
        flex: 1,
        flexDirection: 'row',
        justifySelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 250,
        height: 250,
        marginTop: 20,
    },
    btn: {
        alignSelf: 'flex-start',
    },
    mainBtn: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 10,
        left: 0,
        backgroundColor: '#008ACE',
        fontSize: 15,
        lineHeight: 16,
    },
    cell: {
        flex: 1,
        paddingVertical: 20,
        borderBottomColor: '#d7d7d7',
        borderBottomWidth: 1,

    },
    cellTitle: {
        marginVertical: 10,
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    cellValue: {
        marginTop: 10,
        fontSize: 16,
        color: '#2e2e2e',
    },
});