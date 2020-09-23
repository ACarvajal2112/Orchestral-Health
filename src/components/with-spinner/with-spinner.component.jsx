import React from 'react';

import {
    SpinnerOverlay,
    SpinnerContainer
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <i className="fad fa-violin fa-10x"></i>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  )
};

export default WithSpinner;