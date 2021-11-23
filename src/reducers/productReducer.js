import * as types from '../actions/types';
import * as api from '../api/index';
import * as arrayUtils from '../utils/array-utils';
import * as dateUtils from '../utils/date-utils';

const initialState = {
    products: api.getStorage('Products'),
    searchText: '',
    activeSort: null
}

const productReducer = (state = initialState, action) => {
    let products = api.getStorage('Products');

    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                ...state
            }
        case types.SEARCH_BY_NAME:       
            return {
                ...state,
                searchText: action.payload.text
            }
        case types.FILTER_BY_BRAND:
                if (action.payload.brands.length > 0) {
                    products = products.filter(product => action.payload.brands.includes(product.brand))
                }
                return {
                    ...state,
                    brands: action.payload.brands,
                    products: products
            }
        case types.FILTER_BY_COLOR:
                    if (action.payload.colors.length > 0) {
                        products = products.filter(product => arrayUtils.compare(product.colors, action.payload.colors) > 0)
                    }
        
                    return {
                        ...state,
                        colors: action.payload.colors,
                        products: products
           }
        case types.SORT_BY_PRICE_ASC:
            return {
                ...state,
                products: state.products.length > 0 ? [...arrayUtils.sortedAsc(state.products, 'price')] : state.products

            }
        case types.SORT_BY_PRICE_DESC:
            return {
                ...state,
                products: state.products.length > 0 ? [...arrayUtils.sortedDesc(state.products, 'price')] : state.products
            }
        case types.SORT_BY_DATE_ASC:
            return {
                ...state,
                products: state.products.length > 0 ? [...dateUtils.sortedAsc(state.products)] : state.products
            }
        case types.SORT_BY_DATE_DESC:
            return {
                ...state,
                products: state.products.length > 0 ? [...dateUtils.sortedDesc(state.products)] : state.products
            }
        case types.ACTIVE_SORT :
                return {
                    ...state,
                    activeSort: action.payload
        }
        default:
            return {
                ...state,
            }
    }
}

export default productReducer;