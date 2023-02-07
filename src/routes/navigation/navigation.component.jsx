import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import { ReactComponent as CrownLogo } from "./crown.svg";
import "./navigation.styles.scss";
const Navgiagtion = () => {
  return (
    <Fragment>
      <header className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <nav>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navgiagtion;
