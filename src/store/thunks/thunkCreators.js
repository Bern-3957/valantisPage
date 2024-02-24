import {productsAPI} from "../../api/api";
import {setIsFetchingAC, setProductsItemsAC} from "../actions/actionCreators";

const removeDuplicates = (productsIds) => {
    let uniqueList = [];
    let ids = new Set();

    productsIds.forEach(item => {
        if (!ids.has(item.id)) {
            uniqueList.push(item);
            ids.add(item.id);
        }
    });

    return uniqueList;

}

export const getProductsItemsTC = (currentPage) => (dispatch) => {
    dispatch(setIsFetchingAC(true))
    productsAPI.getProductsIds(currentPage)
        .then(response=>{
            dispatch(getProductsItemsFromIdsTC(response.data.result)).then(()=>{
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
        dispatch(getProductsItemsFromIdsTC(response.data.result)).then(()=>{
            dispatch(setIsFetchingAC(false))
        })

    }).catch(error=>{
        console.log("Server error: ", error )
    })
}

export const getProductsItemsFromIdsTC = (productsIds) => (dispatch) => {
    return productsAPI.getProductsItems(productsIds).then(response=>{
        dispatch(setProductsItemsAC(removeDuplicates(response.data.result)))
    }).catch(error=>{
        console.log("Server error: ", error )
    })
}