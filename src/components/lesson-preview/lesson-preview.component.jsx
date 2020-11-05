import React from 'react';
import { connect } from 'react-redux';

import LessonCard from '../lesson-card/lesson-card.component';
import PreviewHeader from '../preview-header/preview-header.component';

import { viewLessonTimes } from '../../redux/lesson/lesson.actions';

const LessonPreview = ({ instructor, title, viewLessonTimes }) => {
  const { id, availabilities } = instructor;

  const handleClick = () => {
    viewLessonTimes({ 
      lessonData: { title, availabilities }, 
      instructorId: id
    });
  }
  
  return(
    <div id={title}>
      <PreviewHeader isClickable>
        <h1 onClick={handleClick}>{title}</h1>
      </PreviewHeader>
      <LessonCard 
        instructor={instructor} 
        title={title} 
        handleClick={handleClick}
      />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  viewLessonTimes: lessonTimesParams => dispatch(viewLessonTimes(lessonTimesParams))
});

export default connect(null, mapDispatchToProps)(LessonPreview);
