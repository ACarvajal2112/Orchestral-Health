import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import InstructorAvailability from  '../instructor-availability/instructor-availability.component';
import CustomButton from '../custom-button/custom-button.component';

import { selectIsRegistrationEnabled, selectLessonsPerWeek } from '../../redux/register/register.selectors';

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

const LessonTimesOverview = ({ 
  closeLessonTimes, 
  title, 
  confirmRegistration, 
  isRegistrationEnabled,
  numLessons
}) => {
  const handleCloseOverlay = () => {
    closeLessonTimes();
  };

  return ReactDom.createPortal(
    <LessonTimesOverlay>
      <LessonTimesOverviewContainer>
        <CloseOverlay onClick={handleCloseOverlay}>x</CloseOverlay>
        <LessonTimesHeader> 
          {/* display title with first character uppercase */}
          <h1>{`${title.charAt(0).toUpperCase()}${title.slice(1)}`}</h1>
          <HeaderSubtitle> 
            <i className='fad fa-long-arrow-right' />
            <span>Lesson Time Availability</span>
            <i className='fad fa-long-arrow-left' />
          </HeaderSubtitle>
        </LessonTimesHeader>
        <InstructorAvailability />
        <RegisterButtonContainer>
          <CustomButton 
            onClick={() => {confirmRegistration()}} 
            className='lesson-times-overview-btn'
            isPrimary
            disabled={!isRegistrationEnabled || numLessons > 4}
            isRegistrationEnabled={isRegistrationEnabled && numLessons <= 4}
          >
            Confirm Registration
          </CustomButton>
          <CustomButton onClick={handleCloseOverlay} isSecondary>
            Cancel
          </CustomButton>
        </RegisterButtonContainer>
      </LessonTimesOverviewContainer>
    </LessonTimesOverlay>,
    document.getElementById('portal')
  );
}

const mapStateToProps = createStructuredSelector({
  isRegistrationEnabled: selectIsRegistrationEnabled,
  numLessons: selectLessonsPerWeek
});

const mapDispatchToProps = dispatch => ({
  confirmRegistration: () => dispatch(confirmRegistration()),
  closeLessonTimes: () => dispatch(closeLessonTimes())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(LessonTimesOverview);
