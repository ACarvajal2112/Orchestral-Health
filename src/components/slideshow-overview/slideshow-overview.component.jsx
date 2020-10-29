import React from 'react';
import { useHistory } from 'react-router-dom';

import SlideshowCard from '../slideshow-card/slideshow-card.component';
import PreviewHeader from '../preview-header/preview-header.component';

import { SlideshowOverviewContainer } from './slideshow-overview.styles';

const SlideshowOverview = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/lessons');
  }

  return (
    <SlideshowOverviewContainer>
      <PreviewHeader isClickable>
        <h1 onClick={handleClick}>Lessons</h1>
      </PreviewHeader>
      <SlideshowCard />
    </SlideshowOverviewContainer>
  );
};

export default SlideshowOverview;
