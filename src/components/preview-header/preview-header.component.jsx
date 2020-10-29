import React from 'react';

import { PreviewHeaderContainer } from './preview-header.styles';

const PreviewHeader = ({ children, isClickable }) => (
  <PreviewHeaderContainer isClickable={isClickable}>
    {children}
  </PreviewHeaderContainer>
);

export default PreviewHeader;
