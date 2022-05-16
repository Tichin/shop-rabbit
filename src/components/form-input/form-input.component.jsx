import React, { Fragment } from 'react';
import './form-input.styles.scss';

export default function FormInput({ label, ...otherProps }) {
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <input {...otherProps} />
    </Fragment>
  );
}
