import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import InstructorAvailability from  '../instructor-availability/instructor-availability.component';

import { toggleLessonHidden } from '../../redux/lesson/lesson.actions';

import { 
  LessonTimesOverviewContainer, /* div */
  LessonTimesOverlay,
  LessonTimesHeader, /* div */
  HeaderSubtitle /* div */
} from './lesson-times-overview.styles';

const LessonTimesOverview = ({ title, availabilities, dispatch }) => {
  return ReactDom.createPortal(
    <LessonTimesOverlay>
      <LessonTimesOverviewContainer>
        <LessonTimesHeader> 
          <h1>{title}</h1>
          <HeaderSubtitle> 
            <i className='fad fa-long-arrow-right' />
            <span>Lesson Time Availability</span>
            <i className='fad fa-long-arrow-left' />
          </HeaderSubtitle>
        </LessonTimesHeader>
        <InstructorAvailability availabilities={availabilities} />
        <div className='register-btn'>
          <button>Register</button>
          &nbsp;
          <button onClick={() => dispatch(toggleLessonHidden())}>Cancel</button>
        </div>
      </LessonTimesOverviewContainer>
    </LessonTimesOverlay>,
    document.getElementById('portal')
  )
};

export default connect()(LessonTimesOverview);
