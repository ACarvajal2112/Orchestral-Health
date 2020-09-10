import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonCard from '../lesson-card/lesson-card.component';
import LessonTimesOverview from '../lesson-times-overview/lesson-times-overview.component';

import { 
  selectToggleLessonHidden, 
  selectLessonsForPreview, 
  selectLessonData 
} from '../../redux/lesson/lesson.selectors';

const LessonsOverview = ({ lessons, isHidden, lessonTimesData }) => (
  <div className='lessons-overview'>
    <h1>Lessons</h1>
    {lessons.map(({ id, ...otherLessonProps }) => (
      <LessonCard key={id} {...otherLessonProps} />
    ))}
    { !isHidden ? ( <LessonTimesOverview {...lessonTimesData} /> ) : null }
  </div>
);

const mapStateToProps = createStructuredSelector({
  lessons: selectLessonsForPreview,
  isHidden: selectToggleLessonHidden,
  lessonTimesData: selectLessonData
});

export default connect(mapStateToProps)(LessonsOverview);
