import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';
import Axios from 'axios';
import { ProductListItem } from './components/ProductListItem/ProductListItem';
import { Header } from '../../components/Header/Header';
import { IconMenu } from '../../components/icons/IconMenu';
import { IconBasket } from '../../components/icons/IconBasket';
import { API_URL } from '../../helpers/constants';
import { SearchBox } from '../../components/SearchBox/SearchBox';

export const ProductListScreen: React.FC = (): JSX.Element => {
    const [list, setList] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        onRefresh();
    }, []);

    const renderItem = ({item}) => {
        return (
            <ProductListItem
                product={item}
                onPress={() => {}}
            />
        );
    };

    const onRefresh = React.useCallback(() => {
        setIsLoading(true);
        getData(isLoading);
    }, []);

    const onScrollToEnd = ({distanceFromEnd}) => {
        getData(false);
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

    const keyExtractor = (product) => product.id;

    return (
                <View>
                    <FlatList
                        ListHeaderComponent={() => (
                            <>
                                <Header>
                                    <IconMenu
                                        fill={'#FFFFFF'}
                                    />
                                    <Text style={styles.headerTitle}>
                                        Ecommerce Store
                                    </Text>
                                    <IconBasket
                                        fill={'#FFFFFF'}
                                    />
                                </Header>
                                <SearchBox />
                            </>
                        )}
                        numColumns={2}
                        data={list}
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
                </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1/2,
        marginHorizontal: 20,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: 20,
    },
});
