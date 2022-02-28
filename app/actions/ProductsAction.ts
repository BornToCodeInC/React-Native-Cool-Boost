import Axios from 'axios';
import {API_URL} from '../helpers/constants';

export enum ProductsActionTypes {
  GET_PRODUCTS_START = 'GET_PRODUCTS_START',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
}

export type productsAction =
  | {type: ProductsActionTypes.GET_PRODUCTS_START}
  | {
      type: ProductsActionTypes.GET_PRODUCTS_SUCCESS;
      payload: {
        data: any;
      };
    }
  | {
      type: ProductsActionTypes.GET_PRODUCTS_ERROR;
      payload: {error: string};
    };

export const getProducts = (dispatch, offset = 0) => {
  dispatch({type: ProductsActionTypes.GET_PRODUCTS_START});

  const limit = 7;
  const page = Math.ceil(offset / limit) + 1;

  Axios.get(
    `${API_URL}?fields[product]=price,description,name&per_page=${limit}&page=${page}`,
  )
    .then(response => {
      console.log('test');
      console.log(response.data.data);
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
        payload: {
          data: response.data.data,
        },
      });
    })
    .catch(error => {
      console.log('err');
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS_ERROR,
        payload: {error},
      });
    });
};
