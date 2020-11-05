import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import { 
  selectAvailabilityByWeek, 
  selectDayOfWeek 
} from '../../redux/lesson/lesson.selectors';

import { updateDayOfWeek } from '../../redux/lesson/lesson.actions';

import { DaysMenuContainer } from './days-menu.styles';

const DaysMenu = ({ availableDays, dayOfWeek, dispatch }) => (
  <DaysMenuContainer>
    {availableDays.map(({ day, isAvailable }) => (
      <CustomButton
        key={day}
        disabled={!isAvailable}
        isAvailable={isAvailable}
        onClick={() => dispatch(updateDayOfWeek(`${day}`))}
        isSelectedDayOfWeek={dayOfWeek === day}
        isDaysMenu
      >
        {day.slice(0,3)}
      </CustomButton>
    ))}
  </DaysMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  availableDays: selectAvailabilityByWeek,
  dayOfWeek: selectDayOfWeek
});

export default connect(mapStateToProps)(DaysMenu);
