import React from 'react';

import InstructorDetail from '../instructor-detail/instructor-detail.component';

import { InstructorDetailsOverviewContainer } from './instructor-details-overview.styles';

const InstructorDetailsOverview = ({ experienceInYears, styles, doesOfferOnline }) => (
  <InstructorDetailsOverviewContainer>
    <InstructorDetail
      fontAwesomeClasses='far fa-file-certificate'
      dataParam={`${experienceInYears} years teaching professionally!`}
    >
      Experience
    </InstructorDetail>
    <InstructorDetail
      fontAwesomeClasses='far fa-guitars'
      // Convert styles array to readable string, pass as data value for styling
      dataParam={styles.toString().split(',').join(', ')}
    >
      Styles
    </InstructorDetail>
    <InstructorDetail
      fontAwesomeClasses='far fa-laptop'
      dataParam={
        doesOfferOnline 
          ? 'Online and In-Person!' 
          : 'Only In-Person!'
      }
    >
      Online/In-Person
    </InstructorDetail>
  </InstructorDetailsOverviewContainer>
);

export default InstructorDetailsOverview;
