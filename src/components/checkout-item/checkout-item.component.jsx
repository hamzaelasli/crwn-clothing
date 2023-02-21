/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

function CheckoutItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart, cartItemQuantityDecrement } = useContext(CartContext);
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const incrementHandler = () => addItemToCart(cartItem);
  const decrementHandler = () => cartItemQuantityDecrement(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={decrementHandler}>&lt;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>&gt;</div>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </span>
    </div>
  );
}
export default CheckoutItem;
