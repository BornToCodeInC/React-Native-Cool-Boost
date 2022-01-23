import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, ScrollView, Pressable, RefreshControl } from 'react-native';
import { Header } from '../../components/Header/Header';
import { IconBasket } from '../../components/icons/IconBasket';
import { IconHeart } from '../../components/icons/IconHeart';
import { IconArrowLeft } from '../../components/icons/IconArrowLeft';
import { ProductsContext } from '../../contexts/ProductsContext';
import { AddToCartModal } from '../AddToCartModal/AddToCartModal';

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const ProductDetailsScreen: React.FC = ({ route, navigation }): JSX.Element => {
    const [refreshing, setRefreshing] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const successModalState = {
        title: 'Product added to your cart',
        iconName: 'check-circle',
        iconColor: '#A5DC86',
        description: '',
    };
    const failModalState = {
        title: 'Select color',
        iconName: 'times-circle',
        iconColor: '#DD6B55',
        description: 'Please select your color to add this item in your cart',
    };
    const [modalState, setModalState] = useState(successModalState);
    const { id } = route.params;

    const { state } = useContext(ProductsContext);

    const product = state.data.filter((product) => product.id === id)[0];

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const showModal = () => {
        setModalState(selectedColor ? successModalState : failModalState);
        setModalVisible(true);
    };
    const hideModal = () => setModalVisible(false);

    return (
    <SafeAreaView>
        <View style={styles.headerContainer}>
            <Header>
                <Pressable onPress={() => navigation.goBack()}>
                    <IconArrowLeft fill={'#FFFFFF'} />
                </Pressable>
                <View style={styles.headerIcons}>
                    <IconHeart fill={'#FFFFFF'} />
                    <View style={styles.headerIconRight}>
                        <IconBasket fill={'#FFFFFF'} />
                    </View>
                </View>
            </Header>
        </View>
        <ScrollView
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>

            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: `https://picsum.photos/id/${id}/250`}}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellValue}>{product.attributes.name}</Text>
                    <Text style={styles.cellTitle}>${product.attributes.price}</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellTitle}>Select color</Text>
                    <Pressable
                        style={styles.btn}
                        onPress={() => setSelectedColor('Blue')}
                    >
                        <Text style={styles.btnText}>Blue</Text>
                    </Pressable>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellTitle}>Description</Text>
                    <Text style={styles.cellValue}>{product.attributes.description}</Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.container}>
            <Pressable
                style={styles.mainBtn}
                onPress={showModal}
            >
                <Text style={styles.mainBtnText}>Add to cart</Text>
            </Pressable>
            <AddToCartModal
                isVisible={modalVisible}
                dismiss={hideModal}
                title={modalState.title}
                iconName={modalState.iconName}
                iconColor={modalState.iconColor}
                description={modalState.description}
            />
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    headerContainer: {
        height: 55,
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
        backgroundColor: '#F7F7F7',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
    },
    btnText: {
        color: '#4A4A4A',
        fontSize: 15,
        lineHeight: 20,
    },
    mainBtn: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 65,
        left: 0,
        backgroundColor: '#008ACE',
        paddingVertical: 12,

    },
    mainBtnText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 16,
        color: '#FFFFFF',
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
    lastCell: {
        marginBottom: 10,
    },
});
