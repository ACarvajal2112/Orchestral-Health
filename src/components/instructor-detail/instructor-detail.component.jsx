import React from 'react';

import {
  InstructorDetailContainer,
  DetailIcon,
  DetailLabel
} from './instructor-detail.styles';

const InstructorDetail = ({ fontAwesomeClasses, dataParam, children }) => (
  <InstructorDetailContainer>
    <DetailIcon>
      <i className={`${fontAwesomeClasses}`}></i>
    </DetailIcon>
    <DetailLabel data-tool-tip={dataParam}>
      {children}
    </DetailLabel>
  </InstructorDetailContainer>
);

export default InstructorDetail;
