import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PendingLessonTimes from '../pending-lesson-times/pending-lesson-times.component';
import RegisteredLessonTimes from '../registered-lesson-times/registered-lesson-times.component';

import { selectLessonsFromPending } from '../../redux/register/register.selectors';

import { RegisteredLessonTimesOverviewContainer } from './registered-lesson-times-overview.styles';

const RegisteredLessonTimesOverview = ({ pendingLessons }) => (
  <RegisteredLessonTimesOverviewContainer>
    {pendingLessons.length ? <PendingLessonTimes pendingLessons={pendingLessons} /> : null}
    <RegisteredLessonTimes />
  </RegisteredLessonTimesOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  pendingLessons: selectLessonsFromPending
});

export default connect(mapStateToProps)(RegisteredLessonTimesOverview);
