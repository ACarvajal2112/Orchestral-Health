import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import {
  setLessonData,
  setDefaultDayOfWeek,
  toggleLessonHidden
} from '../../redux/lesson/lesson.actions';

import {
  LessonCardContainer, /* div */
  LessonImgContainer, /* div */
  ContentContainer, /* div */
  TitleContainer, /* span */
  InstructorContainer, /* span */
  DescriptionContainer, /* span */
  SeeTimesContainer /* div */
} from './lessons-card.styles';

const LessonCard = ({ title, instructor: { id, imgUrl, name, description, availabilities }, dispatch }) => (
  <LessonCardContainer>
    <LessonImgContainer
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <ContentContainer>
      <TitleContainer>{title}</TitleContainer>
      <InstructorContainer><i>{name}</i></InstructorContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
      <SeeTimesContainer>
        <CustomButton 
          onClick={() => {
            dispatch(
              setLessonData({
                title, 
                availabilities
              })
            );
            dispatch(setDefaultDayOfWeek(id));
            dispatch(toggleLessonHidden(null));
          }}
        >SEE TIMES</CustomButton> 
      </SeeTimesContainer>  
    </ContentContainer>
  </LessonCardContainer>
);

export default connect()(LessonCard);
