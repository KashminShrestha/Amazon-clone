import { useDispatch, useSelector } from 'react-redux';
import { add_item_to_cart, removefromcart } from './Reducers/cartActions';
import swal from 'sweetalert';

const CartPage = () => {
    const dispatch = useDispatch()
    const cart_items = useSelector(state => state.cart.cart_items)

    const decreaseQuantity = (id, quantity) => e => {
        e.preventDefault()
        quantity--
        if (quantity === 0) {
            dispatch(removefromcart(id))
        }
        else {
            dispatch(add_item_to_cart(id, quantity))
        }
    }
    const increaseQuantity = (id, quantity, countinstock) => e => {
        e.preventDefault()
        quantity++
        if (countinstock < quantity) {
            swal('Error', "Quantity must be less than Count_In_Stock", "warning")
        }
        else {
            dispatch(add_item_to_cart(id, quantity))
        }
    }

    return (
        <>
            <div className="container-fluid text-center">
                <table className="table table-bordered border border-3 border-primary table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <td>S.no</td>
                            <td>Product Name</td>
                            <td>Product Image</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart_items && cart_items.map((p, i) => {
                                return <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{p.product_name}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:5000/${p.product_image}`}
                                            height="120px"
                                            alt="..."
                                        />
                                    </td>
                                    <td>

                                        <div className='btn btn-primary rounded-start-pill' onClick={decreaseQuantity(p.product, p.quantity)}>-</div>

                                        <input className='form-control ' style={{ width: '40px', display: 'inline-block' }} type="text" value={p.quantity} readOnly />

                                        <div className='btn btn-primary rounded-end-circle' onClick={increaseQuantity(p.product, p.quantity, p.count_in_stock)}>+</div>
                                    </td>

                                    <td>Nrs.{p.quantity * p.product_price}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => {
                                            dispatch(removefromcart(p.product))

                                        }}>Remove</button>
                                    </td>
                                </tr>

                            })
                        }

                    </tbody>



                </table>
            </div>
        </>

    );
};

export default CartPage;
