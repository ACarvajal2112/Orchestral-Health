import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import { updateDayOfWeek } from '../../redux/lesson/lesson.actions';
import { 
  selectDayOfWeek,
  selectAvailabileTimesByDay,
  selectAvailabilityByWeek
} from '../../redux/lesson/lesson.selectors';

import './instructor-availability.styles.scss';

const InstructorAvailability = ({ dayOfWeekSelected, availableTimes, availableDays, dispatch }) => (
  <div className='instructor-availability'> 
    <div className='days-menu-btns'>
      {availableDays.map(({ day, isAvailable }) => (
        <CustomButton
          disabled={!isAvailable}
          onClick={() => dispatch(updateDayOfWeek(`${day}`))}
          style={isAvailable ? {background: 'lightblue'} : null}
      >{day.slice(0,3)}</CustomButton>
      ))}
    </div>
    <div className='times-list'>
      <div className='day-of-week'>
        {dayOfWeekSelected}
      </div>
      <div className='available-times'>
        {availableTimes.map(({ id, time }) => 
          <span key={id}>{time}</span>
        )}
      </div>
    </div>
    <div className='registration-overview'>
      <div className='registration'>
        Registration status
      </div>
      <div>
        <span className='registration-status'>Not Registered</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  dayOfWeekSelected: selectDayOfWeek,
  availableTimes: selectAvailabileTimesByDay,
  availableDays: selectAvailabilityByWeek
});

export default connect(mapStateToProps)(InstructorAvailability);
