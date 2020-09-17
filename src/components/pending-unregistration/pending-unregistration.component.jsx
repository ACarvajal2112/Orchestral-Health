import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { updateRegisterRemovePending } from '../../redux/register/register.actions';

import { 
  PendingUnregistrationContainer, 
  PendingUnregistrationHeader, 
  UnregistrationTimeLabel 
} from './pending-unregistration.styles';

const PendingUnregistration = ({ pendingLessons, updateRegisterRemovePending }) => (
  <PendingUnregistrationContainer>
    <PendingUnregistrationHeader>Pending Unregistration</PendingUnregistrationHeader>
    <div>
      {pendingLessons.map(({ dayOfWeek, times, title }) => (
        <div key={dayOfWeek}>
          <span key={dayOfWeek} style={{ fontWeight: 'bold' }}>
            {dayOfWeek}
          </span>
          {times.map(time => (
            <UnregistrationTimeLabel
              key={`${dayOfWeek}:${time}`} 
              onClick={() => 
                updateRegisterRemovePending({
                  lessonToRemove: {
                    title,
                    dayOfWeek,
                    times: [time]
                  },
                  toRegister: false
                })
              }
            >
              {time}
            </UnregistrationTimeLabel>
          ))}
        </div>
      ))}
    </div>
  </PendingUnregistrationContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const mapDispatchToProps = dispatch => ({
  updateRegisterRemovePending: lesson => dispatch(updateRegisterRemovePending(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingUnregistration);
