import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { selectLessonsFromRegister } from '../../redux/register/register.selectors';

import { 
  RegisteredLessonTimesContainer, 
  RegisteredTimesHeader,
  RegisteredTimeLabel
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = ({ title, registeredLessons }) => (
  <RegisteredLessonTimesContainer>
    <RegisteredTimesHeader>Registered Lesson Times</RegisteredTimesHeader>
    {registeredLessons.length ? (
      <div>
        {registeredLessons.map(({ id, dayOfWeek, times }) => (
          <div key={id}>
            <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
              {dayOfWeek}
            </span>
            {times.map(time => (
              <RegisteredTimeLabel key={`${dayOfWeek}:${time}`}>
                {time}
              </RegisteredTimeLabel>
            ))}
          </div>
        ))}
      </div>
     ) : (
       <div>
         <span>You are not yet registered for  
           <span style={{ fontWeight: 'bold' }}> {title} </span> 
           lessons!
         </span>
       </div>
     )}
    </RegisteredLessonTimesContainer> 
  );

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle,
  registeredLessons: selectLessonsFromRegister
});

export default connect(mapStateToProps)(RegisteredLessonTimes);
