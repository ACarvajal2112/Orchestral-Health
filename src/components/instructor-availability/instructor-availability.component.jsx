import React from 'react';

import DaysMenu from '../days-menu/days-menu.component';
import LessonTimesList from '../lesson-times-list/lesson-times-list.component';
import RegistrationOverview from '../registration-overview/registration-overview.component';

import { InstructorAvailabilityContainer } from './instructor-availability.styles';

const InstructorAvailability = () => (
  <InstructorAvailabilityContainer>
    <DaysMenu />
    <LessonTimesList />
    <RegistrationOverview />
  </InstructorAvailabilityContainer>
);

export default InstructorAvailability;
