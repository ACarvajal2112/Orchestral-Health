import React from 'react';

import LessonCard from '../lesson-card/lesson-card.component';
import PreviewHeader from '../preview-header/preview-header.component';

const LessonPreview = ({ title, instructor }) => (
  <div id={title}>
    <PreviewHeader>
      <h1>{title}</h1>
    </PreviewHeader>
    <LessonCard instructor={instructor} title={title} />
  </div>
);

export default LessonPreview;
