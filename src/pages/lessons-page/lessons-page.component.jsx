import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonsOverview from '../../components/lessons-overview/lessons-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsLessonDataLoaded } from '../../redux/lesson/lesson.selectors';
import { fetchLessonDataStart } from '../../redux/lesson/lesson.actions';

const LessonsOverviewWithSpinner = WithSpinner(LessonsOverview);

const LessonsPage = ({ fetchLessonDataStart, isLessonDataLoaded }) => {
  useEffect(() => {
    fetchLessonDataStart();
  }, [fetchLessonDataStart]);
  
  return <LessonsOverviewWithSpinner isLoading={!isLessonDataLoaded} />
};

const mapStateToProps = createStructuredSelector({
  isLessonDataLoaded: selectIsLessonDataLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchLessonDataStart: () => dispatch(fetchLessonDataStart())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LessonsPage);
