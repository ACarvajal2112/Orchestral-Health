import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import FamilyOverview from '../../components/family-overview/family-overview.component';

const HomePage = ({ match }) => {
  console.log(match);
  return (
    <div className='home-page'>
      <Route exact path={`${match.path}`} component={Directory} />
      <Route path={`${match.path}:familyId`} component={FamilyOverview} />
    </div>
  )
};

export default withRouter(HomePage);