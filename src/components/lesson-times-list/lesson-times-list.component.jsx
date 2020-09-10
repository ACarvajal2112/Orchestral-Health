import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectDayOfWeek, 
  selectLessonTitle, 
  selectAvailableTimesForPreview 
} from '../../redux/lesson/lesson.selectors';
import { updateRegisterAddPending } from '../../redux/register/register.actions';

import {
  LessonTimesListContainer, /* div */
  DayOfWeekContainer, /* div */
  AvailableTimesContainer, /* div */
  AvailableTimeLabel /* span */
} from './lesson-times-list.styles';

const LessonTimesList = ({ dayOfWeek, title, availableTimes, updateRegisterAddPending }) => {
  return (
  <LessonTimesListContainer>
    <DayOfWeekContainer>
      {dayOfWeek}
    </DayOfWeekContainer>
    <AvailableTimesContainer>
      {availableTimes.length ? (
        availableTimes.map(time => (
          <div key={time}>
            <AvailableTimeLabel 
              key={time}
              onClick={() => 
                updateRegisterAddPending({
                  id: `${dayOfWeek}`,
                  title,
                  time,
                  dayOfWeek
                })
              }
            >
              {time}
            </AvailableTimeLabel>
          </div>
        ))
      ) : (
        <div>
          <span>Check another day for 
            <span style={{ fontWeight: 'bold' }}> {title} </span> 
            lesson availabilities!
          </span>
        </div>
      )}
    </AvailableTimesContainer>
  </LessonTimesListContainer>
)};

const mapStateToProps = createStructuredSelector({
  dayOfWeek: selectDayOfWeek,
  title: selectLessonTitle,
  availableTimes: selectAvailableTimesForPreview
});

const mapDispatchToProps = dispatch => ({
  updateRegisterAddPending: lessonToAdd => dispatch(updateRegisterAddPending(lessonToAdd))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonTimesList);
