import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducers from "./cartReducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";




const rootReducer = combineReducers({
    cart: cartReducers
})

const initialData = {
    cart: {
        cart_items: localStorage.getItem('cart_items') ? JSON.parse(localStorage.getItem('cart_items')) : [],
        shipping_info: localStorage.getItem("shippinginfo") ? JSON.parse(localStorage.getItem('shippinginfo')) : {}
    }
}

const middleware = [thunk]
export const store = createStore(rootReducer, initialData, composeWithDevTools(
    applyMiddleware(...middleware)))
console.log(initialData)