import React from 'react';

import {
  PendingLessonTimesContainer, /* div */
  PendingTimesHeader, /* div */
  LessonTimesResults, /* div */
  RegisteredTimeLabel /* span */
} from './pending-lesson-times.styles';

const PendingLessonTimes = ({ pendingLessons }) => (
  <PendingLessonTimesContainer>
    <PendingTimesHeader>Pending Lesson Times</PendingTimesHeader>
    <LessonTimesResults>
      {pendingLessons.map(({ id, dayOfWeek, times }) => (
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
    </LessonTimesResults>
  </PendingLessonTimesContainer>
);

export default PendingLessonTimes;
