import React from 'react';
import Products from "./Products";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts, getCurrentPage, getIsFetching} from "../../store/selectors/productsSelectors";
import {setCurrentPageAC} from "../../store/actions/actionCreators";
import {getProductsItemsTC} from "../../store/thunks/thunkCreators";
import preloader from "./../../assets/images/preloader.gif";

const ProductsContainer = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector(getAllProducts)
    const currentPage = useSelector(getCurrentPage)
    const isFetching = useSelector(getIsFetching)

    const setCurrentPage = (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
        dispatch(getProductsItemsTC(currentPage))
    }

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };


    return <Products
        isFetching={isFetching}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        currentPage={currentPage}
        allProducts={allProducts}/>
};

export default ProductsContainer;