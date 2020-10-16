import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import InstructorDetails from '../instructor-details/instructor-details.component';

import { viewLessonTimes } from '../../redux/lesson/lesson.actions';

import {
  LessonCardContainer, 
  LessonImgContainer, 
  ContentContainer,
  InstructorContainer, 
  DescriptionContainer,
  SeeTimesContainer
} from './lessons-card.styles';

const LessonCard = ({  
  instructor: { id, imgUrl, name, description, availabilities, ...otherInstructorProps }, 
  title,
  viewLessonTimes 
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
      <InstructorDetails {...otherInstructorProps} />
      <SeeTimesContainer>
        <CustomButton 
          onClick={() => { 
            viewLessonTimes({ 
              lessonData: { title, availabilities }, 
              instructorId: id
            })
          }}
        >SEE TIMES</CustomButton> 
      </SeeTimesContainer>  
    </ContentContainer>
  </LessonCardContainer>
);

const mapDispatchToProps = dispatch => ({
  viewLessonTimes: lessonTimesParams => dispatch(viewLessonTimes(lessonTimesParams))
});

export default connect(null, mapDispatchToProps)(LessonCard);
