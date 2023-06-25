import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "./cartConstant"




const cartReducers = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let new_item = action.payload
            let itemExist = state.cart_items.find(item => item.product === new_item.product)
            if (!itemExist) {
                return { ...state, cart_items: [...state.cart_items, action.payload] }
            }
            else {
                return {
                    ...state, cart_items: state.cart_items.map(item =>
                        item.product === new_item.product ? new_item : item
                    )
                }
            }
        // return { cart_items: [...state.cart_items, action.payload] }
        case REMOVE_FROM_CART:
            return { ...state, cart_items: [...state.cart_items.filter((item) => item.product !== action.payload)] }
        case SAVE_SHIPPING_INFO:
            return {
                ...state, shipping_info: action.payload
            }
        default:
            return { ...state }
    }

}

export default cartReducers
