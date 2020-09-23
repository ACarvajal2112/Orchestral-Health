import React from 'react';

import RegistrationStatusContainer from '../registration-status/registration-status.container';
import LessonsPerWeek from '../lessons-per-week/lessons-per-week.component';
import RegisteredLessonTimesOverview from '../registered-lesson-times-overview/registered-lesson-times-overview.component';

import { RegistrationOverviewContainer } from './registration-overview.styles';

const RegistrationOverview = () => (
  <RegistrationOverviewContainer>
    <RegistrationStatusContainer />
    <LessonsPerWeek />
    <RegisteredLessonTimesOverview />
  </RegistrationOverviewContainer>
);

export default RegistrationOverview;
