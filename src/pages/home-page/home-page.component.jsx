import React from 'react';

import Directory from '../../components/directory/directory.component';

const HomePage = ({ match }) => {
  console.log(match);
  return (
    <div className='home-page'>
      <Directory />
    </div>
  )
};

export default HomePage;