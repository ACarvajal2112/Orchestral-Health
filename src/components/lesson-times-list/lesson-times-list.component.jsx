import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectDayOfWeek, 
  selectAvailabileTimesByDay,
  selectLessonTitle
} from '../../redux/lesson/lesson.selectors';
import { selectLessonsPerWeek } from '../../redux/register/register.selectors';
import { addLessonAndUpdateRegister } from '../../redux/register/register.actions';

import {
  LessonTimesListContainer, /* div */
  DayOfWeekContainer, /* div */
  AvailableTimesContainer, /* div */
  AvailableTimeLabel /* span */
} from './lesson-times-list.styles';

const LessonTimesList = ({ dayOfWeek, availableTimes, title, lessonsPerWeek, dispatch }) => (
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
              dispatch(addLessonAndUpdateRegister({
                id: lessonsPerWeek,
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
);

const mapStateToProps = createStructuredSelector({
  dayOfWeek: selectDayOfWeek,
  availableTimes: selectAvailabileTimesByDay,
  title: selectLessonTitle,
  lessonsPerWeek: selectLessonsPerWeek
});

export default connect(mapStateToProps)(LessonTimesList);
