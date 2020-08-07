import React from 'react';

import InstructorAvailability from  '../instructor-availability/instructor-availability.component';

import { 
  LessonTimesOverviewContainer, /* div */
  LessonTimesHeader, /* div */
  HeaderSubtitle /* div */
} from './lesson-times-overview.styles';

const LessonTimesOverview = ({ title, availabilities }) => (
  <LessonTimesOverviewContainer>
    <LessonTimesHeader> 
      <h1>{title}</h1>
      <HeaderSubtitle> 
        <i className='fad fa-long-arrow-right' />
        <span>Lesson Time Availability</span>
        <i className='fad fa-long-arrow-left' />
      </HeaderSubtitle>
    </LessonTimesHeader>
    <InstructorAvailability availabilities={availabilities} />
  </LessonTimesOverviewContainer>
);

export default LessonTimesOverview;
