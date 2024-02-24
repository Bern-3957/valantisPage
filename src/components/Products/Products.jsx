import React, {useState} from 'react';
import s from "./Products.module.css"
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {getFilteredProductsItemsTC} from "../../store/thunks/thunkCreators";
import preloader from "../../assets/images/preloader.gif";

const ProductItem = (props) => {
    return <div className={s.item}>
        <span className={s.itemTitle}>{props.item.product}</span>
        <span className={s.itemPrice}>{props.item.price}₽</span>
        <span className={s.itemId}>{props.item.id}</span>
        <span className={s.itemId}>{props.item.brand}</span>
    </div>
}

const Products = (props) => {
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm({mode: "onSubmit"})

    const onSubmit = (data) => {
        console.log(data)

        if (data.brand.length !== 0) {
            dispatch(getFilteredProductsItemsTC({"brand": data.brand}))
        } else if (data.price.length !== 0) {
            dispatch(getFilteredProductsItemsTC({"price": Number(data.price)}))
        } else if (data.product.length !== 0) {
            dispatch(getFilteredProductsItemsTC({"product": data.product}))
        }
    }

    return (
        <div className={s.products}>
            <div>Фильтровать можно только по одному пункту за раз</div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.filters} style={{marginBottom: '30px'}}>
                <input placeholder={'Бренд'} type="text" {...register('brand')}/>
                <input placeholder={'Цена'} type="text" {...register('price')}/>
                <input placeholder={'Название продукта'} type="text" {...register('product')}/>
                <button>Применить фильтр</button>
            </form>
            {props.isFetching
                ?
                <img src={preloader} alt="loader"/>
                :
                <div className={s.itemInner}>
                    {props.allProducts.map(item => {
                        return <ProductItem item={item}/>
                    })}
                </div>}
            <div style={{marginTop: '20px', marginBottom: '40px'}}>
                <button onClick={props.handlePrevClick} disabled={props.currentPage === 1}>Предыдущая</button>
                <span> Страница {props.currentPage} </span>
                <button onClick={props.handleNextClick}>Следующая</button>
            </div>
        </div>
    );
};


export default Products;