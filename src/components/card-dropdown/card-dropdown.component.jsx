import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import './card-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';

function CardDropDown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}
export default CardDropDown;
