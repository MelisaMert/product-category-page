import * as types from '../actions/types';
import {round } from 'lodash';
import * as api from '../api/index';

const initialState = {
    totalAmount: 0,
    totalCount: (api.getStorage('Cart') || []).length,
    cart: api.getStorage('Cart'), 
    isDisplayDeleteModal: false,
    removedCartItemId: null,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CART:
            return {
                ...state,
                cart: state.cart
            }
        case types.ADD_TO_CART:
            const adCart = [...state.cart, action.payload];
            api.setStorageObject('Cart', adCart)
            return {
                ...state,
                cart: adCart,
                totalCount: [...state.cart, action.payload].length
            }
        case types.DELETE_FROM_CART:
            const upCart = state.cart.filter(c => c.id !== action.payload);
            api.setStorageObject('Cart', upCart)
            return {
                ...state,
                cart: upCart,
                totalCount: state.cart.filter(c => c.id !== action.payload).length
            }
        case types.IS_DISPLAY_DELETE_MODAL: 
        return {
            ...state,
            removedCartItemId: action.payload,
            isDisplayDeleteModal: !state.isDisplayDeleteModal
        }
        case types.GET_TOTAL_AMOUNT_OF_CART:
            let totalAmount  = 0;
            let length = state.cart.length;

            if (length > 0) {
                state.cart.forEach(cart => {
                    totalAmount += round(cart.price, 2);
                })
            }

            if(length === 0 ) {
                totalAmount = 0;
            }

            return {
                ...state,
                totalAmount: totalAmount,
                totalCount: length
            }
     
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;



