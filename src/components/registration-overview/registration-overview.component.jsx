import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RegistrationStatus from '../registration-status/registration-status.component';
import LessonsPerWeek from '../lessons-per-week/lessons-per-week.component';
import RegisteredLessonTimes from '../registered-lesson-times/registered-lesson-times.component';

import { selectRegisterStatus } from '../../redux/register/register.selectors';

import { RegistrationOverviewContainer } from './registration-overview.styles';

const RegistrationOverview = () => (
  <RegistrationOverviewContainer>
    <RegistrationStatus />
    <LessonsPerWeek />
    <RegisteredLessonTimes />
  </RegistrationOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  status: selectRegisterStatus
});

export default connect(mapStateToProps)(RegistrationOverview);
