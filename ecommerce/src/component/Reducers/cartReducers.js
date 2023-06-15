import { ADD_TO_CART } from "./cartConstant"




const cartReducers = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { cart_items: [...state.cart_items, action.payload] }
        default:
            return { ...state }
    }
}

export default cartReducers