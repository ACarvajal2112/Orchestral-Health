import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectDayOfWeek, 
  selectAvailabileTimesByDay,
  selectLessonTitle
} from '../../redux/lesson/lesson.selectors';

import { addLessonToRegister } from '../../redux/register/register.actions';

import {
  LessonTimesListContainer, /* div */
  DayOfWeekContainer, /* div */
  AvailableTimesContainer, /* div */
  AvailableTimeLabel /* span */
} from './lesson-times-list.styles';

const LessonTimesList = ({ dayOfWeek, availableTimes, title, dispatch }) => (
  <LessonTimesListContainer>
    <DayOfWeekContainer>
      {dayOfWeek}
    </DayOfWeekContainer>
    <AvailableTimesContainer>
      {availableTimes.map(({ id, time }) =>
        <div key={id}>
          <AvailableTimeLabel 
            key={id}
            onClick={() => 
              dispatch(addLessonToRegister({
                title,
                time,
                dayOfWeek
              })
            )}
          >
            {time}
          </AvailableTimeLabel>
        </div>
      )}
    </AvailableTimesContainer>
  </LessonTimesListContainer>
);

const mapStateToProps = createStructuredSelector({
  dayOfWeek: selectDayOfWeek,
  availableTimes: selectAvailabileTimesByDay,
  title: selectLessonTitle
});

export default connect(mapStateToProps)(LessonTimesList);
