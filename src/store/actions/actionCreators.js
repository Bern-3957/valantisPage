import {SET_CURRENT_PAGE, SET_IS_FETCHING, SET_PRODUCTS_ITEMS} from "./actionTypes";

export const setProductsItemsAC = (productsItems) => {
    return {type: SET_PRODUCTS_ITEMS, productsItems}
}
export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setIsFetchingAC = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}
