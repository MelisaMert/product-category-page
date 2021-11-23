import React from 'react';
import { useDispatch } from 'react-redux';
import { isRemoveCartItem } from '../actions/cart';
import '../styles/cart-item.css';

const CartItem = ({ id, name, smallImage }) => {
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(isRemoveCartItem(id));
    }
    
    return (<>
        <div className="cart-item">
            <div className="cart-image">
                <img src={smallImage} alt=""></img>
            </div>
            <div className="cart-info">
                <span>{name}</span>
                <div className="cart-remove-button">
                    <input type="button" onClick={deleteProduct} value="Kaldır" />
                </div>
            </div>
        </div>
    </>)
}

export default CartItem;