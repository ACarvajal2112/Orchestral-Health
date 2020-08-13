import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import { updateLessonsPerWeek } from '../../redux/register/register.actions';

import {
  LessonsPerWeekContainer,
  LessonsPerWeekHeader,
  OptionsContainer
} from './lessons-per-week.styles';

const LessonsPerWeek = ({ dispatch }) => (
  <LessonsPerWeekContainer>
    <LessonsPerWeekHeader>
      Lessons / Week
    </LessonsPerWeekHeader>
    <OptionsContainer>
      <CustomButton onClick={() => dispatch(updateLessonsPerWeek(1))}>1</CustomButton>
      <CustomButton onClick={() => dispatch(updateLessonsPerWeek(2))}>2</CustomButton>
      <CustomButton onClick={() => dispatch(updateLessonsPerWeek(3))}>3</CustomButton>
      <CustomButton onClick={() => dispatch(updateLessonsPerWeek(4))}>4</CustomButton>
    </OptionsContainer>
  </LessonsPerWeekContainer>
);

export default connect()(LessonsPerWeek);
