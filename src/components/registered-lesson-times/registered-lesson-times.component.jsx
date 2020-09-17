import React from 'react';
import { connect } from 'react-redux';

import { selectRegisteredLessonsForPreview } from '../../redux/register/register.selectors';
import { updateRegisterAddPending } from '../../redux/register/register.actions';

import { 
  RegisteredLessonTimesContainer, 
  RegisteredTimesHeader,
  RegisteredTimeLabel
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = ({ title, registeredLessons, updateRegisterAddPending }) => (
  <RegisteredLessonTimesContainer>
    <RegisteredTimesHeader>Registered Lesson Times</RegisteredTimesHeader>
    {registeredLessons.length ? (
      <div>
        {registeredLessons.map(({ dayOfWeek, times }) => (
          <div key={dayOfWeek}>
            <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
              {dayOfWeek}
            </span>
            {times.map(time => (
              <RegisteredTimeLabel 
                key={`${dayOfWeek}:${time}`}
                onClick={() => updateRegisterAddPending({
                  lessonToAdd: {
                    title,
                    times: [time],
                    dayOfWeek
                  },
                  toRegister: false
                })}
              >
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

const mapStateToProps = (state, ownProps) => ({
  registeredLessons: selectRegisteredLessonsForPreview(ownProps.title)(state)
});

const mapDispatchToProps = dispatch => ({
  updateRegisterAddPending: lessonToAdd => dispatch(updateRegisterAddPending(lessonToAdd))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredLessonTimes);
