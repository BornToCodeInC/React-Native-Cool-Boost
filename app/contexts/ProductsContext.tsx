import React, {createContext, useMemo, useReducer} from 'react';
import {productsReducer} from '../reducers/ProductsReducer';
import {productsAction} from '../actions/ProductsAction';

type Context = {
  state: any;
  dispatch: React.Dispatch<productsAction>;
};

export const initialState = {
  error: '',
  isLoading: false,
  data: [],
};

export const ProductsContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

export const ProductsProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  return (
    <ProductsContext.Provider value={{...value}}>
      {children}
    </ProductsContext.Provider>
  );
};
