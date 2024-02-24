import {productsAPI} from "../../api/api";
import {setIsFetchingAC, setProductsItemsAC} from "../actions/actionCreators";
import {current} from "@reduxjs/toolkit";

const removeDuplicates = (productsIds) => {
    return [...new Set(productsIds)]
}

export const getProductsItemsTC = (currentPage) => (dispatch) => {
    dispatch(setIsFetchingAC(true))
    productsAPI.getProductsIds(currentPage)
        .then(response=>{
            dispatch(getProductsItemsFromIdsTC(removeDuplicates(response.data.result))).then(()=>{
                dispatch(setIsFetchingAC(false))
            })
        })
        .catch(error=>{
            console.log("Server error: ", error )
        })
}

export const getFilteredProductsItemsTC = (params) => (dispatch) =>{
    dispatch(setIsFetchingAC(true))
    dispatch(setProductsItemsAC([]))
    productsAPI.getFilteredProductsItemsIds(params).then(response=>{
        dispatch(getProductsItemsFromIdsTC(removeDuplicates(response.data.result))).then(()=>{
            dispatch(setIsFetchingAC(false))
        })

    }).catch(error=>{
        console.log("Server error: ", error )
    })
}

export const getProductsItemsFromIdsTC = (productsIds) => (dispatch) => {
    return productsAPI.getProductsItems(productsIds).then(response=>{
        dispatch(setProductsItemsAC(response.data.result))
    }).catch(error=>{
        console.log("Server error: ", error )
    })
}