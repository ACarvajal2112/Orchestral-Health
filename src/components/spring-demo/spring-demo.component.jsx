import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import useInterval from 'react-useinterval';

import './spring-demo.styles.scss';

const LESSON_SLIDES = [
  {
    id: 1,
    url: 'https://pbs.twimg.com/profile_images/3339201785/aac33603860b5a35e39604d5959a34eb_400x400.jpeg'
  },
  {
    id: 2,
    url: 'https://pbs.twimg.com/profile_images/3339201785/aac33603860b5a35e39604d5959a34eb_400x400.jpeg'
  },
  {
    id: 3,
    url: 'https://pbs.twimg.com/profile_images/3339201785/aac33603860b5a35e39604d5959a34eb_400x400.jpeg'
  },
  {
    id: 4,
    url: 'https://pbs.twimg.com/profile_images/3339201785/aac33603860b5a35e39604d5959a34eb_400x400.jpeg'
  },
  {
    id: 5,
    url: 'https://pbs.twimg.com/profile_images/3339201785/aac33603860b5a35e39604d5959a34eb_400x400.jpeg'
  }
]

const SpringDemo = () => {

  const [index, setIndex] = useState(0);
  const item = LESSON_SLIDES[index];
  const increment = () => setIndex(state => (state + 1) % LESSON_SLIDES.length);
  useInterval(increment, 2000);

  const transitions = useTransition(LESSON_SLIDES[index], item => item.id, {
    from: {opacity: 0, transform: 'scale(1.1)'},
    enter: {opacity: 1, transform: 'scale(1)'},
    leave: {opacity: 0, transform: 'scale(0.9)'}
  });

  return (
    <div className='spring-demo-container'>
      {transitions.map(({ item,  props, key}) => {
        return ( <animated.div 
          key={key}
          className='spring-demo'
          style={{
            backgroundImage: `url(${item.url})`,
            ...props
          }} />
        )
      })}
    </div>
  )
};

export default SpringDemo;
