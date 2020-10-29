import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { updateRegisterRemovePending } from '../../redux/register/register.actions';

import {
  PendingLessonTimesContainer,
  PendingTimesHeader,
  RegisteredTimeLabel 
} from './pending-lesson-times.styles';

const PendingLessonTimes = ({ pendingLessons, title, updateRegisterRemovePending }) => (
  <PendingLessonTimesContainer>
    <PendingTimesHeader>Pending Registration </PendingTimesHeader>
    <div>
      {pendingLessons.map(({ dayOfWeek, times }) => (
        <div key={dayOfWeek}>
          <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
            {dayOfWeek}
          </span>
          {times.map(time => (
            <RegisteredTimeLabel 
              key={`${dayOfWeek}:${time}`}
              onClick={() => 
                updateRegisterRemovePending({
                  lessonToRemove: {
                    title,
                    dayOfWeek,
                    times: [time]
                  },
                  toRegister: true
                })
              }
            >
              {time}
            </RegisteredTimeLabel>
          ))}
        </div>
      ))}
    </div>
  </PendingLessonTimesContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const mapDispatchToProps = dispatch => ({
  updateRegisterRemovePending: lesson => dispatch(updateRegisterRemovePending(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingLessonTimes);
