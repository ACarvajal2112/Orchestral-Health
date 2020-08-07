import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonTimesOverview from '../../components/lesson-times-overview/lesson-times-overview.component';
import LessonCard from '../../components/lesson-card/lesson-card.component';

import { 
  selectInstructors,
  selectToggleLessonHidden,
  selectLessonData
} from '../../redux/lesson/lesson.selectors';

import { setLessonHidden } from '../../redux/lesson/lesson.actions';

import './lessons-page.styles.scss';

class LessonsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const { dispatch, isHidden } = this.props;
    if (!isHidden) {
      dispatch(setLessonHidden());
    }
  }

  render() {
    const { instructors, isHidden, lessonTimesData } = this.props;
    return (
      <div className='lessons-page'>
        <h1>Lessons</h1>
        {instructors.map(({ ...otherInstructorProps }) => (
          <LessonCard key={otherInstructorProps.id} {...otherInstructorProps} />
        ))}
        { !isHidden ? ( <LessonTimesOverview {...lessonTimesData} /> ) : null }
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  instructors: selectInstructors,
  isHidden: selectToggleLessonHidden,
  lessonTimesData: selectLessonData
});

export default connect(mapStateToProps)(LessonsPage);