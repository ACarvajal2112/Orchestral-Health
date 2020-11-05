import React from 'react';
import { connect } from 'react-redux';

import { selectRegisteredLessonsForPreview } from '../../redux/register/register.selectors';
import { updateRegisterAddPending } from '../../redux/register/register.actions';

import { ImportantText } from '../../global.styles';

import { 
  RegisteredLessonTimesContainer, 
  RegisteredTimesHeader,
  RegisteredTimeLabel, 
  LessonTimesList
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = ({ title, registeredLessons, updateRegisterAddPending }) => (
  <RegisteredLessonTimesContainer>
    <RegisteredTimesHeader>
      <ImportantText>Registered</ImportantText>&nbsp;Times
    </RegisteredTimesHeader>
    {registeredLessons.length ? (
      <LessonTimesList>
        {registeredLessons.map(({ dayOfWeek, times }) => (
          <div key={dayOfWeek}>
            <ImportantText key={dayOfWeek}>
              {dayOfWeek}
            </ImportantText>
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
      </LessonTimesList>
    ) : (
      <div>
        You are <ImportantText>not registered</ImportantText> for  
          <ImportantText> {title} </ImportantText> 
          lessons!
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
