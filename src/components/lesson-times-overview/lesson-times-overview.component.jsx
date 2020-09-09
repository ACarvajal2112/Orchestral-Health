import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import InstructorAvailability from  '../instructor-availability/instructor-availability.component';

import { toggleLessonHidden } from '../../redux/lesson/lesson.actions';
import { confirmLessonRegistrationStart } from '../../redux/register/register.actions';

import { 
  LessonTimesOverviewContainer, /* div */
  CloseOverlay, /* span */
  LessonTimesOverlay,
  LessonTimesHeader, /* div */
  HeaderSubtitle, /* div */
  RegisterButtonContainer /* div */
} from './lesson-times-overview.styles';

class LessonTimesOverview extends React.Component {

  handleCloseOverlay = () => {
    const { dispatch } = this.props;
    dispatch(toggleLessonHidden());
  };

  render() {
    const { title, confirmLessonRegistrationStart } = this.props;
    return ReactDom.createPortal(
      <LessonTimesOverlay>
        <LessonTimesOverviewContainer>
          <CloseOverlay onClick={this.handleCloseOverlay}>x</CloseOverlay>
          <LessonTimesHeader> 
            <h1>{title}</h1>
            <HeaderSubtitle> 
              <i className='fad fa-long-arrow-right' />
              <span>Lesson Time Availability</span>
              <i className='fad fa-long-arrow-left' />
            </HeaderSubtitle>
          </LessonTimesHeader>
          <InstructorAvailability />
          <RegisterButtonContainer>
            <button
              onClick={() => {
                confirmLessonRegistrationStart()
              }}>
              Confirm Registration
            </button>
            &nbsp;
            <button onClick={this.handleCloseOverlay}>Cancel</button>
          </RegisterButtonContainer>
        </LessonTimesOverviewContainer>
      </LessonTimesOverlay>,
      document.getElementById('portal')
    );
  }
}

const mapDispatchToProps = dispatch => ({
  confirmLessonRegistrationStart: () => dispatch(confirmLessonRegistrationStart())
}); 

export default connect(null, mapDispatchToProps)(LessonTimesOverview);
