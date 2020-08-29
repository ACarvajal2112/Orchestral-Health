import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

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
      <CustomButton>1</CustomButton>
      <CustomButton>2</CustomButton>
      <CustomButton>3</CustomButton>
      <CustomButton>4</CustomButton>
    </OptionsContainer>
  </LessonsPerWeekContainer>
);

export default connect()(LessonsPerWeek);
