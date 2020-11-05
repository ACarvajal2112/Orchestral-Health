import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonsPerWeek } from '../../redux/register/register.selectors';

import { ImportantText } from '../../global.styles';

import {
  LessonsPerWeekContainer,
  LessonsPerWeekHeader,
  NumLessonsContainer,
  NumLessons
} from './lessons-per-week.styles';

const LessonsPerWeek = ({ numLessons }) => (
  <LessonsPerWeekContainer>
    <LessonsPerWeekHeader numLessons={numLessons}>
      <ImportantText>Lessons</ImportantText>
      &nbsp;/&nbsp;
      <ImportantText>Week</ImportantText> 
      {numLessons > 4 ? <span>&nbsp;({numLessons})</span> : null}
      <i className='fas fa-exclamation-triangle'></i>
    </LessonsPerWeekHeader>
    <NumLessonsContainer>
      <NumLessons isLessonsPerWeekNum={numLessons === 1}>1</NumLessons>
      <NumLessons isLessonsPerWeekNum={numLessons === 2}>2</NumLessons>
      <NumLessons isLessonsPerWeekNum={numLessons === 3}>3</NumLessons>
      <NumLessons isLessonsPerWeekNum={numLessons === 4}>4</NumLessons>
    </NumLessonsContainer>
  </LessonsPerWeekContainer>
);

const mapStateToProps = createStructuredSelector({
  numLessons: selectLessonsPerWeek
});

export default connect(mapStateToProps)(LessonsPerWeek);
