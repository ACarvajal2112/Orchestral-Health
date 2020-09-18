import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTransition, animated } from 'react-spring';

import { selectLessonsData } from '../../redux/directory/directory.selectors';

import {
  SlideshowCardContainer,
  SlideshowContainer,
  Content,
  TitleAnimationContainer,
  SubcontentContainer,
  Subtitle
} from './slideshow-card.styles';

const SlideshowCard = ({ lessonData }) => {
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const incrementer = window.setInterval(() => {
      // at index = arr.length, modulus operation resets index to 0
      setIndex(prevIndex => (prevIndex + 1) % lessonData.length);
    }, 3000);
    return () => {
      window.clearInterval(incrementer);
    }
  }, [lessonData]);

  // config to slow down transition animations evenly
  const config = { friction: 25, tension: 75 }
  
  // image slideshow transitions
  const transitions = useTransition(lessonData[index], item => item.id, {
    from: { opacity: 0, transform: 'scale(1.1)'},
    enter: { opacity: 1, transform: 'scale(1)'},
    leave: { opacity: 0, transform: 'scale(0.9)'},
    config
  });

  // title text animation transitions
  const titleTransition = useTransition(lessonData[index], item => item.id, {
    from: { opacity: 0, transform: 'translate(20rem, 0)'},
    enter: { opacity: 1, transform: 'translate(0, 0)'},
    leave: { opacity: 0, transform: 'translate(-50rem, 0)'},
    config
  });

  return (
    <SlideshowCardContainer>
      <SlideshowContainer>
        {transitions.map(({ item, props, key }) => {
          return <animated.div
            key={key}
            className='lesson-slideshow'
            style={{
              backgroundImage: `url(${encodeURI(item.imgUrl)})`,
              ...props
            }}
          />
        })}
      </SlideshowContainer>
      <Content>
        <TitleAnimationContainer>
          {titleTransition.map(({ item, props, key }) => {
            return <animated.h1
              key={key}
              className='lesson-title'
              style={{...props}}>
                {item.title}
              </animated.h1>
          })}
        </TitleAnimationContainer>
        <SubcontentContainer>
          <Subtitle>Sign up today!</Subtitle>
          <button>View Lessons</button>
        </SubcontentContainer>
      </Content>
    </SlideshowCardContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  lessonData: selectLessonsData
});

export default connect(mapStateToProps)(SlideshowCard);
