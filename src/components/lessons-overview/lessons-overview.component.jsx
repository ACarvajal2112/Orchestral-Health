import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import LessonPreview from '../lesson-preview/lesson-preview.component';
import LessonTimesOverview from '../lesson-times-overview/lesson-times-overview.component';
import NavMenu from '../nav-menu/nav-menu.component';

import { 
  selectToggleLessonHidden, 
  selectLessonsForPreview, 
  selectLessonData 
} from '../../redux/lesson/lesson.selectors';

import { LessonsOverviewContainer } from './lessons-overview.styles';

const LessonsOverview = ({ lessons, isHidden, lessonTimesData }) => (
  <LessonsOverviewContainer>
    <NavMenu navItems={lessons} />
    {lessons.map(({ id, ...otherLessonProps }) => (
      <LessonPreview key={id} {...otherLessonProps} />
    ))}
    <NavMenu navItems={lessons} isFooter />
    { !isHidden ? ( <LessonTimesOverview {...lessonTimesData} /> ) : null }
  </LessonsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  lessons: selectLessonsForPreview,
  isHidden: selectToggleLessonHidden,
  lessonTimesData: selectLessonData
});

export default connect(mapStateToProps)(LessonsOverview);
