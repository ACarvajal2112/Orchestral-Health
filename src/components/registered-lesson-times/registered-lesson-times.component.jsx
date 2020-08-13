import React from 'react';

import { 
  RegisteredLessonTimesContainer, /* div */
  LessonTimesHeaderContainer, /* div */
  LessonTimesResults /* div */
} from './registered-lesson-times.styles';

const RegisteredLessonTimes = () => (
  <RegisteredLessonTimesContainer>
    <LessonTimesHeaderContainer>
      Lesson Times
    </LessonTimesHeaderContainer>
    <LessonTimesResults>
      You are not currently registered for lessons!
    </LessonTimesResults>
  </RegisteredLessonTimesContainer>
);

export default RegisteredLessonTimes;
