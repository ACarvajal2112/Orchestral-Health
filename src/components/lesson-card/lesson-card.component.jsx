import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import InstructorDetailsOverview from '../instructor-details-overview/instructor-details-overview.component';

import {
  LessonCardContainer, 
  LessonImgContainer, 
  ContentContainer,
  InstructorContainer, 
  DescriptionContainer
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
      <CustomButton onClick={handleClick} className='lesson-card-btn' isSecondary>
        SEE TIMES
      </CustomButton> 
    </ContentContainer>
  </LessonCardContainer>
);

export default LessonCard;
