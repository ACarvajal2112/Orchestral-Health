import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';

import InstructorAvailability from  '../instructor-availability/instructor-availability.component';

import { closeLessonTimes } from '../../redux/lesson/lesson.actions';
import { confirmRegistration } from '../../redux/register/register.actions';

import { 
  LessonTimesOverviewContainer,
  CloseOverlay, 
  LessonTimesOverlay,
  LessonTimesHeader,
  HeaderSubtitle,
  RegisterButtonContainer
} from './lesson-times-overview.styles';

class LessonTimesOverview extends React.Component {

  handleCloseOverlay = () => {
    const { closeLessonTimes } = this.props;
    closeLessonTimes();
  };

  render() {
    const { title, confirmRegistration } = this.props;
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
            <button onClick={() => {confirmRegistration()}}>
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
  confirmRegistration: () => dispatch(confirmRegistration()),
  closeLessonTimes: () => dispatch(closeLessonTimes())
}); 

export default connect(null, mapDispatchToProps)(LessonTimesOverview);
