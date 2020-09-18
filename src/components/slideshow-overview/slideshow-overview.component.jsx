import React from 'react';

import SlideshowCard from '../slideshow-card/slideshow-card.component';

import { SlideshowOverviewContainer, SlideshowHeader } from './slideshow-overview.styles';

const SlideshowOverview = () => (
  <SlideshowOverviewContainer>
    <SlideshowHeader>
      <h1>Lessons</h1>
    </SlideshowHeader>
    <SlideshowCard />
  </SlideshowOverviewContainer>
);

export default SlideshowOverview;
