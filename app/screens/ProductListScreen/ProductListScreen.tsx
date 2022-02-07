import React, { useEffect, useState, useContext } from 'react';
import { FlatList, View, StyleSheet, Text, RefreshControl, Alert, Pressable } from 'react-native';
import Axios from 'axios';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { ProductListItem } from './components/ProductListItem/ProductListItem';
import { Header } from '../../components/Header/Header';
import { IconMenu } from '../../components/icons/IconMenu';
import { IconBasket } from '../../components/icons/IconBasket';
import { API_URL } from '../../helpers/constants';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { ProductsContext } from '../../contexts/ProductsContext';
import { getProducts } from '../../actions/ProductsAction';
import { ErrorModal } from '../ErrorModal/ErrorModal';

export const ProductListScreen: React.FC = ({ navigation }): JSX.Element => {
    const [list, setList] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState(false);
    const { state, dispatch } = useContext(ProductsContext);

    const hideModal = () => setModalVisible(false);

    useEffect(() => {
        getProducts(dispatch);
        console.log('test');
    }, []);

    const renderItem = ({item}) => {
        return (
            <ProductListItem
                product={item}
                onPress={() => navigation.navigate('Details', {id: item.id})}
            />
        );
    };

    const onRefresh = React.useCallback(() => {
        setIsLoading(true);
        getData(isLoading);
    }, []);

    const onScrollToEnd = ({distanceFromEnd}) => {
        Alert.alert(`${state.data.length}`);
        getProducts(dispatch, state.data.length);
    };

    const getData = (isRefreshing: boolean) => {
        const limit = 7;
        const offset = isRefreshing ? 0 : list.length;
        const page = Math.ceil(offset / limit) + 1;
        Axios.get(
            `${API_URL}?fields[product]=price,description,name&per_page=${limit}&page=${page}`)
            .then((response) => {
                setList(isRefreshing ?
                    list.concat(response.data.data) :
                    response.data.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const keyExtractor = () => uuid();

    return (
                <View>
                    <View style={styles.headerContainer}>
                        <Header>
                            <Pressable onPress={() => navigation.openDrawer()}>
                                <IconMenu
                                    fill={'#FFFFFF'}
                                />
                            </Pressable>
                            <Text style={styles.headerTitle}>
                                Ecommerce Store
                            </Text>
                            <Pressable onPress={() => {setModalVisible(true)}}>
                                <IconBasket
                                    fill={'#FFFFFF'}
                                />
                            </Pressable>
                        </Header>
                    </View>
                    <FlatList
                        ListHeaderComponent={() => (
                            <>
                                <SearchBox />
                            </>
                        )}
                        numColumns={2}
                        data={state.data}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        refreshControl={<RefreshControl
                            refreshing={isLoading}
                            onRefresh={onRefresh}
                        />}
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                        onEndReached={onScrollToEnd}
                        onEndReachedThreshold={0.2}
                    />
                    <ErrorModal
                        isVisible={modalVisible}
                        dismiss={hideModal}
                        title={'Connection Error'}
                        iconName={'times-circle'}
                        iconColor={'#DD6B55'}
                    />
                </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        marginHorizontal: 20,
    },
    headerContainer: {
        height: 55,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});
