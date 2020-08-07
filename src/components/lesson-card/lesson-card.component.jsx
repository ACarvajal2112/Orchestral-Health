import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import {
  setLessonData,
  setDefaultDayOfWeek,
  toggleLessonHidden
} from '../../redux/lesson/lesson.actions';

import './lesson-card.styles.scss';

const LessonCard = ({ id, imgUrl, title, name, description, availabilities, dispatch }) => (
  <div className='lesson-card'>
    <div 
      className='lesson-img'
      style={{
        backgroundImage: `url(${imgUrl})`
      }}
    />
    <div className='content'>
      <span className='title'>{title}</span>
      <span className='instructor'><i>{name}</i></span>
      <span className='description'>{description}</span>
      <div className='content-footer'>
        <CustomButton 
          onClick={() => {
            dispatch(
              setLessonData({
                title, 
                availabilities}
              )
            );
            dispatch(setDefaultDayOfWeek(id));
            dispatch(toggleLessonHidden());
          }}
        >SEE TIMES</CustomButton> 
      </div>  
    </div>
  </div>
);

export default connect()(LessonCard);
