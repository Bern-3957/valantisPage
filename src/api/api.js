import axios from "axios";
import md5 from 'js-md5';

function generateXAuthHeader(password) {
    function getCurrentDate() {
        const now = new Date();
        const year = now.getUTCFullYear();
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = now.getUTCDate().toString().padStart(2, '0');
        return `${year}${month}${day}`;
    }
    return md5(`${password}_${getCurrentDate()}`);
}

const xAuthHeader = generateXAuthHeader("Valantis");

const BASE_URL = 'https://api.valantis.store:40000/'

const HEADERS = {
    'X-Auth': xAuthHeader
}

export const productsAPI = {
    getProductsIds(currentPage) {
        return axios.post(BASE_URL, {
                "action": "get_ids",
                "params": {"offset": (currentPage-1)*50, "limit": 50}
            },
            {
                headers: HEADERS,
                referrerPolicy: "unsafe_url"
            })
    },
    getProductsItems(productsIds) {
        return axios.post(BASE_URL, {
                "action": "get_items",
                "params": {"ids": productsIds}
            },
            {
                headers: HEADERS,
                referrerPolicy: "unsafe_url"
            })
    },

    getFilteredProductsItemsIds(params){
        return axios.post(BASE_URL, {
            "action": "filter",
            "params": params,
        }, {
            headers: HEADERS,
            referrerPolicy: "unsafe_url"
        })
    },

}


