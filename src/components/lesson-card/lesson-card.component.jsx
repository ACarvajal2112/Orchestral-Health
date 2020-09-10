import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { viewLessonTimes } from '../../redux/lesson/lesson.actions';

import {
  LessonCardContainer, /* div */
  LessonImgContainer, /* div */
  ContentContainer, /* div */
  TitleContainer, /* span */
  InstructorContainer, /* span */
  DescriptionContainer, /* span */
  SeeTimesContainer /* div */
} from './lessons-card.styles';

const LessonCard = ({  
  instructor: { id, imgUrl, name, description, availabilities }, 
  title,
  viewLessonTimes }) => (
  <LessonCardContainer>
    <LessonImgContainer
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <ContentContainer>
      <TitleContainer>{title}</TitleContainer>
      <InstructorContainer>
        <i>{name}</i>
      </InstructorContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
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
