import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';

import { selectAvailabilityByWeek } from '../../redux/lesson/lesson.selectors';

import { updateDayOfWeek } from '../../redux/lesson/lesson.actions';

import { DaysMenuContainer } from './days-menu.styles';

const DaysMenu = ({ availableDays, dispatch }) => (
  <DaysMenuContainer>
    {availableDays.map(({ day, isAvailable }) => (
      <CustomButton
        key={day}
        disabled={!isAvailable}
        onClick={() => dispatch(updateDayOfWeek(`${day}`))}
        style={isAvailable ? {background: 'lightblue'} : null}
      >
        {day.slice(0,3)}
      </CustomButton>
    ))}
  </DaysMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  availableDays: selectAvailabilityByWeek
});

export default connect(mapStateToProps)(DaysMenu);
