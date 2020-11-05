import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { updateRegisterRemovePending } from '../../redux/register/register.actions';

import { ImportantText } from '../../global.styles';

import {
  PendingLessonTimesContainer,
  PendingTimesHeader,
  RegisteredTimeLabel,
  PendingRegistrationList
} from './pending-lesson-times.styles';

const PendingLessonTimes = ({ pendingLessons, title, updateRegisterRemovePending }) => (
  <PendingLessonTimesContainer>
    <PendingTimesHeader>
      <span>
        Pending&nbsp;<ImportantText>Registration</ImportantText>
      </span>
    </PendingTimesHeader>
    <PendingRegistrationList>
      {pendingLessons.map(({ dayOfWeek, times }) => (
        <div key={dayOfWeek}>
          <ImportantText key={dayOfWeek}>
            {dayOfWeek}
          </ImportantText>
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
    </PendingRegistrationList>
  </PendingLessonTimesContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const mapDispatchToProps = dispatch => ({
  updateRegisterRemovePending: lesson => dispatch(updateRegisterRemovePending(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingLessonTimes);
