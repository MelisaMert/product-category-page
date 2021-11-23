import * as types from './types';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: types.GET_PRODUCTS
        })
    } catch (error) {
        console.log(error);
    }
}

export const searchByName = (text) => async(dispatch) => {
    try {
        dispatch({
            type: types.SEARCH_BY_NAME,
            payload: {
                text: text
            }
        })
    } catch(error) {
        console.log(error);
    }
}

export const filterByBrand = (brands) => async(dispatch) => {
    try {
       dispatch({
           type: types.FILTER_BY_BRAND,
           payload: {
              brands: brands
           }
         })
   }
    catch(error){
       console.log(error);
   }
}

export const filterByColor = (colors) => async(dispatch) => {
    try {
        dispatch({
            type: types.FILTER_BY_COLOR,
            payload: {
               colors: colors
            }
        })
    } catch(error) {
        console.log(error);
    }
}

export const sortByPriceAsc = () => async(dispatch) => {
    try {
         dispatch({
            type: types.SORT_BY_PRICE_ASC
         })
    } catch(error) {
        console.log(error);
    }
} 

export const sortByPriceDesc = () => async(dispatch) => {
    try {
        dispatch({
            type: types.SORT_BY_PRICE_DESC
        })
    } catch(error){
        console.log(error);
    } 
}

export const sortByDateAsc = () => async(dispatch) => {
    try {
        dispatch({
            type: types.SORT_BY_DATE_ASC
        })
    } catch(error){
        console.log(error);
    } 
}

export const sortByDateDesc = () => async(dispatch) => {
    try {
        dispatch({
            type: types.SORT_BY_DATE_DESC
        })
    } catch(error){
        console.log(error);
    } 
}

export const activeSorter = (index) => async(dispatch) => {
    try {
        dispatch({
            type: types.ACTIVE_SORT,
            payload: index
        })
    } catch(error){
        console.log(error);
    } 
}