import React from 'react';

import { PreviewHeaderContainer } from './preview-header.styles';

const PreviewHeader = ({ isClickable, children }) => (
  <PreviewHeaderContainer isClickable={isClickable}>
    {children}
  </PreviewHeaderContainer>
);

export default PreviewHeader;
