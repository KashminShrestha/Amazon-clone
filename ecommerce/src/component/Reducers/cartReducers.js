import { ADD_TO_CART } from "./cartConstant"


const initialData = {
    cart_items: [],
    shipping_info: {}
}

const cartReducers = (state = {}, action) => {
    switch (action) {
        case ADD_TO_CART:
            return { cart_items: [...state.cart_items, action.payload] }
        default:
            return { ...state }
    }
}

export default cartReducers