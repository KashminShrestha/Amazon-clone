import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartConstant"




const cartReducers = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let new_item = action.payload
            let itemExist = state.cart_items.find(item => item.product === new_item)
            if (!itemExist) {
                return { cart_items: [...state.cart_items, action.payload] }
            }
            else {
                return {
                    cart_items: [state.cart_items.map(item => {
                        return (item.product === new_item.product) ? new_item : item
                    })]
                }
            }
        // return { cart_items: [...state.cart_items, action.payload] }
        case REMOVE_FROM_CART:
            return { cart_items: [...state.cart_items.filter((item) => item.product !== action.payload)] }
        default:
            return { ...state }
    }
}

export default cartReducers
