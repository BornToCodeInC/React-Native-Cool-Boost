import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  MutableRefObject,
} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  RefreshControl,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import Axios from 'axios';
import {v4 as uuid} from 'uuid';
import {ProductListItem} from '../ProductListScreen/components/ProductListItem/ProductListItem';
import {Header} from '../../components/Header/Header';
import {IconBasket} from '../../components/icons/IconBasket';
import {IconArrowLeft} from '../../components/icons/IconArrowLeft';
import {API_URL} from '../../helpers/constants';
import {SearchBox} from '../../components/SearchBox/SearchBox';

export const SearchScreen: React.FC = ({route, navigation}): JSX.Element => {
  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const renderItem = ({item}) => {
    return (
      <ProductListItem
        product={item}
        handlePress={() =>
          navigation.navigate('Details', {id: item.id, currentProduct: item})
        }
      />
    );
  };

  const onRefresh = React.useCallback(() => {
    setIsLoading(true);
    getData();
  }, []);

  const onScrollToEnd = () => {
    getData();
  };

  const handleSubmit = (query: string) => {
    setSearchQuery(query);
    getData();
  };

  const getData = () => {
    const limit = 7;
    const offset = list.length;
    const page = Math.ceil(offset / limit) + 1;
    if (searchQuery) {
      Axios.get(
        `${API_URL}?fields[product]=price,description,name&filter[name]=${searchQuery}&per_page=${limit}&page=${page}`,
      )
        .then(response => {
          setList(list.concat(response.data.data));
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setList([]);
    }
  };

  const keyExtractor = () => uuid();

  return (
    <View style={styles.container}>
      <Header>
        <Pressable onPress={() => navigation.goBack()}>
          <IconArrowLeft fill={'#FFFFFF'} />
        </Pressable>
        <Text style={styles.headerTitle}>{route.name}</Text>
        <Pressable onPress={() => {}}>
          <IconBasket fill={'#FFFFFF'} />
        </Pressable>
      </Header>
      <FlatList
        style={styles.content}
        ListHeaderComponent={() => (
          <>
            <SearchBox
              handleSubmit={handleSubmit}
              searchInputValue={searchQuery}
              searchInputRef={searchInputRef}
            />
          </>
        )}
        numColumns={1}
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
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
    flex: 1,
  },
  content: {
    paddingTop: 55,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
