import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import InstructorDetailsOverview from '../instructor-details-overview/instructor-details-overview.component';

import {
  LessonCardContainer, 
  LessonImgContainer, 
  ContentContainer,
  InstructorContainer, 
  DescriptionContainer,
  SeeTimesContainer
} from './lessons-card.styles';

const LessonCard = ({ 
  instructor: { imgUrl, name, description, ...otherInstructorProps },
  handleClick
}) => (
  <LessonCardContainer>
    <LessonImgContainer
      style={{
        backgroundImage: `url(${encodeURI(imgUrl)})`
      }}
    />
    <ContentContainer>
      <InstructorContainer>{name}</InstructorContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
      <InstructorDetailsOverview {...otherInstructorProps} />
      <SeeTimesContainer>
        <CustomButton 
          onClick={handleClick}
        >SEE TIMES</CustomButton> 
      </SeeTimesContainer>  
    </ContentContainer>
  </LessonCardContainer>
);

export default LessonCard;
