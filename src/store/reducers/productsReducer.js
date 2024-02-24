import {SET_CURRENT_PAGE, SET_IS_FETCHING, SET_PRODUCTS_ITEMS} from "../actions/actionTypes";

let InitialState = {
    productsItems: [],
    currentPage: 1,
    isFetching: false
}

export const productsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_ITEMS:
            return {
                ...state,
                productsItems: action.productsItems
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state
    }
}