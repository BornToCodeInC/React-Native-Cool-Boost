import {
    ProductsActionTypes,
    productsAction,
} from '../actions/ProductsAction';

export const productsReducer = (
    state: any,
    action: productsAction
): any => {
    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload.data),
                isLoading: false,
                error: '',
            };
        case ProductsActionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};