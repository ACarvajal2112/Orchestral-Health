import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import { updateDayOfWeek } from '../../redux/lesson/lesson.actions';
import { selectDayOfWeek } from '../../redux/lesson/lesson.selectors';

import './instructor-availability.styles.scss';

const InstructorAvailability = ({ dispatch, dayOfWeekSelected }) => (

      <div className='instructor-availability'> 
        <div className='days-of-week'>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Mon'))}>Mon</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Tue'))}>Tue</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Wed'))}>Wed</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Thu'))}>Thu</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Fri'))}>Fri</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Sat'))}>Sat</CustomButton>
          <CustomButton onClick={() => dispatch(updateDayOfWeek('Sun'))}>Sun</CustomButton>
        </div>
        <div className='times-list'>
          <div>{dayOfWeekSelected}</div>
          <div>
            <strong>8am - 10am</strong>
            <input type='checkbox' />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button>Register</button>
        </div>
      </div>
);

const mapStateToProps = createStructuredSelector({
  dayOfWeekSelected: selectDayOfWeek
});

export default connect(mapStateToProps)(InstructorAvailability);
