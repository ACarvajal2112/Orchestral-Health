import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonTimesOverview from '../../components/lesson-times-overview/lesson-times-overview.component';
import LessonCard from '../../components/lesson-card/lesson-card.component';

import { 
  selectLessons,
  selectToggleLessonHidden,
  selectLessonData
} from '../../redux/lesson/lesson.selectors';

import { toggleLessonHidden } from '../../redux/lesson/lesson.actions';

import { LessonsPageContainer } from './lessons-page.styles';

class LessonsPage extends React.Component {
  
  componentDidMount() {
    const { dispatch, isHidden } = this.props;
    if (!isHidden) {
      dispatch(toggleLessonHidden(true));
    }
  }
  
  render() {
    const { lessons, isHidden, lessonTimesData } = this.props;
    return (
      <LessonsPageContainer>
        <h1>Lessons</h1>
        {lessons.map(({ id, ...otherLessonProps }) => (
          <LessonCard key={id} {...otherLessonProps} />
        ))}
        { !isHidden ? ( <LessonTimesOverview {...lessonTimesData} /> ) : null }
      </LessonsPageContainer>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  lessons: selectLessons,
  isHidden: selectToggleLessonHidden,
  lessonTimesData: selectLessonData
});

export default connect(mapStateToProps)(LessonsPage);
