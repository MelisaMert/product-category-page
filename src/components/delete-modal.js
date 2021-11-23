import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteFromCart, isRemoveCartItem} from '../actions/cart';
import '../styles/delete-modal.css';

const DeleteModal = () => {
  const dispatch = useDispatch();
  const {removedCartItemId} = useSelector(state => state.cart);
  const onClickApprove = () => {
      dispatch(deleteFromCart(removedCartItemId))
      dispatch(isRemoveCartItem())
  } 
  
  return (<>
    <div className="overlay">
      <div className="delete-modal">
        <div className="delete-modal-header">
          <span>Ürünü silmek istediğinize emin misiniz?</span>
        </div>
        <hr />
        <p className="delete-modal-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
        </p>
        <div className="delete-modal-button-wrapper">
          <button className="button-red" onClick={() => dispatch(isRemoveCartItem())}>HAYIR</button>
          <button className="button-green" onClick={() => onClickApprove() }>EVET</button>
        </div>
      </div>
    </div>
</>)
}

export default DeleteModal;

