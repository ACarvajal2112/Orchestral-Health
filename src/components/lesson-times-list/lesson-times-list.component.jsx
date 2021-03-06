import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  selectDayOfWeek, 
  selectLessonTitle, 
  selectAvailableTimesForPreview 
} from '../../redux/lesson/lesson.selectors';
import { updateRegisterAddPending } from '../../redux/register/register.actions';

import { ImportantText } from '../../global.styles';

import {
  LessonTimesListContainer,
  DayOfWeekContainer,
  AvailableTimesContainer,
  AvailableTimeLabel
} from './lesson-times-list.styles';

const LessonTimesList = ({ dayOfWeek, title, availableTimes, updateRegisterAddPending }) => (
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
                  lessonToAdd: {
                    title,
                    times: [time],
                    dayOfWeek
                  },
                  toRegister: true
                })
              }
            >
              {time}
            </AvailableTimeLabel>
          </div>
        ))
      ) : (
        <div>
          <ImportantText>Check another day</ImportantText> 
          &nbsp;for {title} lesson availabilities!
        </div>
      )}
    </AvailableTimesContainer>
  </LessonTimesListContainer>
);

const mapStateToProps = createStructuredSelector({
  dayOfWeek: selectDayOfWeek,
  title: selectLessonTitle,
  availableTimes: selectAvailableTimesForPreview
});

const mapDispatchToProps = dispatch => ({
  updateRegisterAddPending: lessonToAdd => dispatch(updateRegisterAddPending(lessonToAdd))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonTimesList);
