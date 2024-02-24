export const getAllProducts = (state) => {
    return state.products.productsItems
}

export const getCurrentPage = (state) => {
    return state.products.currentPage
}

export const getIsFetching = (state) => {
    return state.products.isFetching
}