/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './form-input.styles.scss';

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      { label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> }
    </div>
  );
}

export default FormInput;
