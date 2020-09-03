import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonsFromPending } from '../../redux/register/register.selectors';
import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';

import { 
  RegisteredLessonTimesContainer, /* div */
  LessonTimesHeader, /* div */
  LessonTimesResults, /* div */
  RegisteredTimeLabel /* span */
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = ({ pendingLessons, title }) => (
  <RegisteredLessonTimesContainer>
    <LessonTimesHeader>Registered Lesson Times</LessonTimesHeader>
    <LessonTimesResults>
      {pendingLessons.length ? (
        pendingLessons.map(({ id, dayOfWeek, times, dispatch }) => (
          <div key={id}>
            <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
              {dayOfWeek}
            </span>
            {times.map(time => (
              <RegisteredTimeLabel 
                key={`${dayOfWeek}:${time}`}
                style={{ display: 'block' }}
              >
                {time}
              </RegisteredTimeLabel>
            ))}
            <br />
          </div>
        ))
      ) : (
        <span>You are not registered for any 
          <span style={{ fontWeight: 'bold' }}> {title} </span> 
          lessons yet!
        </span>
      )}
    </LessonTimesResults>
  </RegisteredLessonTimesContainer>
);

const mapStateToProps = createStructuredSelector({
  pendingLessons: selectLessonsFromPending,
  title: selectLessonTitle 
});

export default connect(mapStateToProps)(RegisteredLessonTimes);
