import React, { useEffect } from 'react';
import CartItem from './cart-item';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalAmountOfCart } from '../actions/cart';
import * as utils from '../utils/array-utils';
import '../styles/cart.css';

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);
    const sortedCardByDate = utils.sortedDesc(cart,'date');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotalAmountOfCart())
    }, [cart, dispatch]);

    return (<>
        <div className="cart">
        {cart.length > 0 ?
            sortedCardByDate.map((item) => {
                return <CartItem key={item.id} {...item} />
            }) : <span className="empty-cart">Sepetinizde ürün bulunmamaktadır.</span>
        }
        </div>
    </>)
}

export default Cart;

