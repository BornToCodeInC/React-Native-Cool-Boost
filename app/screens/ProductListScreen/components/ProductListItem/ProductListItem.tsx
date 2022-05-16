import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {PICTURES_API_URL} from '../../../../helpers/constants';

export const ProductListItem: React.FC<any> = ({
  handlePress,
  product,
}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={{uri: `${PICTURES_API_URL}/id/${product.id}/200`}}
        resizeMode={'contain'}
        style={styles.img}
      />

      <Text style={styles.name} numberOfLines={1}>
        {product?.attributes?.name}
      </Text>
      <Text style={styles.price}>{product?.attributes?.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 2,
    borderRadius: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 5,
    fontSize: 15,
    lineHeight: 20,
    color: '#4A4A4A',
  },
  price: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '700',
    color: '#4A4A4A',
  },
});
