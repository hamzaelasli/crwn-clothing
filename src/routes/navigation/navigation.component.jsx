/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CardIcon from '../../components/card-icon/card-icon.component';
import CardDropDown from '../../components/card-dropdown/card-dropdown.component';

function Navgiagtion() {
  const { currentUser } = useContext(UserContext);
  // console.log(toggle);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <nav>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {
              currentUser
                ? <span onClick={signOutUser} className="nav-link">SIGN OUT</span>
                : (
                  <Link className="nav-link" to="/auth">
                    SIGN IN
                  </Link>
                )
            }
            <CardIcon />
          </div>
          {isCartOpen && <CardDropDown />}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Navgiagtion;
