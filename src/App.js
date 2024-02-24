import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductsItemsTC} from "./store/thunks/thunkCreators";
import ProductsContainer from "./components/Products/ProductsContainer";

function App() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.products.currentPage)

    useEffect(() => {
        dispatch(getProductsItemsTC(currentPage))
    }, []);

    return (
        <div className="App">
            <div className="container">
                <div style={{fontSize: 30, fontWeight: 700, marginBottom:'30px'}}>Товары</div>
                <ProductsContainer/>
            </div>
        </div>
    );
}

export default App;
