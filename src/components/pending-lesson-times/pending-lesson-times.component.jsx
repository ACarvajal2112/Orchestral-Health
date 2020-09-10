import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { updateRegisterRemovePending } from '../../redux/register/register.actions';

import {
  PendingLessonTimesContainer, /* div */
  PendingTimesHeader, /* div */
  LessonTimesResults, /* div */
  RegisteredTimeLabel /* span */
} from './pending-lesson-times.styles';

const PendingLessonTimes = ({ pendingLessons, title, updateRegisterRemovePending }) => (
  <PendingLessonTimesContainer>
    <PendingTimesHeader>Pending Lesson Times</PendingTimesHeader>
    <LessonTimesResults>
      {pendingLessons.map(({ id, dayOfWeek, times }) => (
        <div key={id}>
          <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
            {dayOfWeek}
          </span>
          {times.map(time => (
            <RegisteredTimeLabel 
              key={`${dayOfWeek}:${time}`}
              onClick={() => 
                updateRegisterRemovePending({
                  title,
                  dayOfWeek,
                  time
                })
              }
            >
              {time}
            </RegisteredTimeLabel>
          ))}
        </div>
      ))}
    </LessonTimesResults>
  </PendingLessonTimesContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const mapDispatchToProps = dispatch => ({
  updateRegisterRemovePending: lesson => dispatch(updateRegisterRemovePending(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingLessonTimes);
