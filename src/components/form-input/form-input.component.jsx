import React from 'react';

import {
  FormInputGroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';

// import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <FormInputGroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`}>
        {label}
      </FormInputLabel>
    ) : null
    }
  </FormInputGroupContainer>
);

export default FormInput;
