import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PendingLessonTimes from '../pending-lesson-times/pending-lesson-times.component';
import PendingUnregistration from '../pending-unregistration/pending-unregistration.component';
import RegisteredLessonTimesContainer from '../registered-lesson-times/registered-lesson-times.container';

import { selectPendingRegistration, selectPendingUnregistration } from '../../redux/register/register.selectors';

import { RegisteredLessonTimesOverviewContainer } from './registered-lesson-times-overview.styles';

const RegisteredLessonTimesOverview = ({ pendingRegistration, pendingUnregistration }) => (
  <RegisteredLessonTimesOverviewContainer>
    <RegisteredLessonTimesContainer />
    {pendingRegistration.length ? ( 
      <PendingLessonTimes pendingLessons={pendingRegistration} />
    ) : null}
    {pendingUnregistration.length ? ( 
      <PendingUnregistration pendingLessons={pendingUnregistration} />
    ) : null}
  </RegisteredLessonTimesOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  pendingRegistration: selectPendingRegistration,
  pendingUnregistration: selectPendingUnregistration
});

export default connect(mapStateToProps)(RegisteredLessonTimesOverview);
