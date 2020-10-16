import React from 'react';

import { InstructorDetailsContainer, DetailsLabel } from './instructor-details.styles';

const InstructorDetails = ({ experienceInYears, styles, doesOfferOnline }) => (
  <InstructorDetailsContainer>
    <DetailsLabel
      isExperienceDetails
      data-tool-tip={`${experienceInYears} years teaching professionally!`} 
    >
      Experience
    </DetailsLabel>
    <DetailsLabel isStylesDetails data-tool-tip={styles.toString().split(',').join(', ')} >
      Styles
    </DetailsLabel>
    <DetailsLabel
      isOnlineInPersonDetails 
      data-tool-tip={
        doesOfferOnline 
          ? 'Online and In-Person lessons available!' 
          : 'Only In-Person lessons available!'
      }
    >
      Online/In-Person
    </DetailsLabel>
  </InstructorDetailsContainer>
);

export default InstructorDetails;
