import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from './crown.svg';
import Footer from '../Footer/footer.component';
import './navigation.styles.scss';

function Navgiagtion() {
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
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
export default Navgiagtion;
