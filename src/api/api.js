import axios from "axios";

const BASE_URL = 'http://api.valantis.store:40000/'

const HEADERS = {
    'X-Auth': '36c58664c6a85656502117384b351c40'
}

export const productsAPI = {
    getProductsIds(currentPage) {
        return axios.post(BASE_URL, {
                "action": "get_ids",
                "params": {"offset": (currentPage-1)*50, "limit": 50}
            },
            {
                headers: HEADERS
            })
    },
    getProductsItems(productsIds) {
        return axios.post(BASE_URL, {
                "action": "get_items",
                "params": {"ids": productsIds}
            },
            {
                headers: HEADERS
            })
    },

    getFilteredProductsItemsIds(params){
        return axios.post(BASE_URL, {
            "action": "filter",
            "params": params,
        }, {
            headers: HEADERS
        })
    },
    //
    // getFilteredProductsBrandItemsIds(params){
    //     debugger
    //     return axios.post(BASE_URL, {
    //         "action": "filter",
    //         "params": params,
    //     }, {
    //         headers: HEADERS
    //     })
    // }
}

