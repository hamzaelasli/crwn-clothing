/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './button.styles.scss';

const BTN_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};
function Button({ children, buttonType, ...otherProps }) {
  return (
    <button className={`button-container ${BTN_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
