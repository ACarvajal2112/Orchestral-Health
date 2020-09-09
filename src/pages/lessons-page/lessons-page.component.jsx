import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonsOverview from '../../components/lessons-overview/lessons-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsLessonDataFetching, selectIsLessonDataLoaded } from '../../redux/lesson/lesson.selectors';
import { fetchLessonDataStart } from '../../redux/lesson/lesson.actions';

const LessonsOverviewWithSpinner = WithSpinner(LessonsOverview);

class LessonsPage extends React.Component {
  
  componentDidMount() {
    const { fetchLessonDataStart } = this.props;
    fetchLessonDataStart();
  }
  
  render() {
    const { isLessonDataLoaded } = this.props;
    return (
      <LessonsOverviewWithSpinner isLoading={!isLessonDataLoaded} />
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isLessonDataFetching: selectIsLessonDataFetching,
  isLessonDataLoaded: selectIsLessonDataLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchLessonDataStart: () => dispatch(fetchLessonDataStart())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LessonsPage);
