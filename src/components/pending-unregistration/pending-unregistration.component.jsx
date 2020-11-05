import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';
import { updateRegisterRemovePending } from '../../redux/register/register.actions';

import { ImportantText } from '../../global.styles';

import { 
  PendingUnregistrationContainer, 
  PendingUnregistrationHeader, 
  UnregistrationTimeLabel,
  PendingUnregistrationList
} from './pending-unregistration.styles';

const PendingUnregistration = ({ pendingLessons, updateRegisterRemovePending }) => (
  <PendingUnregistrationContainer>
    <PendingUnregistrationHeader>
      <span>
        Pending&nbsp;
        <span style={{display: 'inline-block', fontWeight: 'bold' }}>
          Unregistration
        </span>
      </span>
    </PendingUnregistrationHeader>
    <PendingUnregistrationList>
      {pendingLessons.map(({ dayOfWeek, times, title }) => (
        <div key={dayOfWeek}>
          <ImportantText key={dayOfWeek}>
            {dayOfWeek}
          </ImportantText>
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
    </PendingUnregistrationList>
  </PendingUnregistrationContainer>
);

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const mapDispatchToProps = dispatch => ({
  updateRegisterRemovePending: lesson => dispatch(updateRegisterRemovePending(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingUnregistration);
