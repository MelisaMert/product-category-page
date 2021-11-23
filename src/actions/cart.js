import * as types from './types';

export const getCart = () => async (dispatch) => {
    try {
        dispatch({
            type: types.GET_CART
        })
    } catch (error) {
        console.log(error);
    }
}

export const addToCart = (data) => async (dispatch) => {
    try {
        dispatch({
            type: types.ADD_TO_CART,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteFromCart = (id) => async (dispatch) => {
    try {
        dispatch({
            type: types.DELETE_FROM_CART,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}

export const getTotalAmountOfCart = () => async(dispatch) => {
    try {
        dispatch({
            type: types.GET_TOTAL_AMOUNT_OF_CART,
        })
    } catch(error) {
        console.log(error)
    }
}

export const isRemoveCartItem = (id) => async(dispatch) => {
    try {
        dispatch({
            type: types.IS_DISPLAY_DELETE_MODAL,
            payload: id
        })
    } catch(error) {
        console.log(error)
    }
}
