import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectDayOfWeek, 
  selectLessonTitle, 
  selectAvailableTimesForPreview 
} from '../../redux/lesson/lesson.selectors';
import { addLessonToPending } from '../../redux/register/register.actions';

import {
  LessonTimesListContainer, /* div */
  DayOfWeekContainer, /* div */
  AvailableTimesContainer, /* div */
  AvailableTimeLabel /* span */
} from './lesson-times-list.styles';

const LessonTimesList = ({ dayOfWeek, title, availableTimes, dispatch }) => {
  return (
  <LessonTimesListContainer>
    <DayOfWeekContainer>
      {dayOfWeek}
    </DayOfWeekContainer>
    <AvailableTimesContainer>
      {availableTimes.map(time => (
        <div key={time}>
          <AvailableTimeLabel 
            key={time}
            onClick={() => 
              dispatch(addLessonToPending({
                title,
                time,
                dayOfWeek
              }))
            }
          >
            {time}
          </AvailableTimeLabel>
        </div>
      ))}
    </AvailableTimesContainer>
  </LessonTimesListContainer>
)};

const mapStateToProps = createStructuredSelector({
  dayOfWeek: selectDayOfWeek,
  title: selectLessonTitle,
  availableTimes: selectAvailableTimesForPreview
});

export default connect(mapStateToProps)(LessonTimesList);
