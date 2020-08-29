import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonsFromRegister } from '../../redux/register/register.selectors';
import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';

import { 
  RegisteredLessonTimesContainer, /* div */
  LessonTimesHeader, /* div */
  LessonTimesResults /* div */
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = ({ registeredLessons, title }) => (
  <RegisteredLessonTimesContainer>
    <LessonTimesHeader>Registered Lesson Times</LessonTimesHeader>
    <LessonTimesResults>
      {registeredLessons.length ? (
        registeredLessons.map(({ id, dayOfWeek, times, dispatch }) => (
          <div key={id}>
            <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
              {dayOfWeek}
            </span>
            {times.map(time => (
              <span 
                key={`${dayOfWeek}:${time}`}
                style={{ display: 'block' }}
                  // onClick={() => 
                  //   dispatch(removeLessonAndUpdateRegister({
                  //     title,
                  //     time,
                  //     dayOfWeek
                  //   })
                  // )}
              >
                {time}
              </span>
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
  registeredLessons: selectLessonsFromRegister,
  title: selectLessonTitle 
});

export default connect(mapStateToProps)(RegisteredLessonTimes);
