import React from 'react';
import { connect } from 'react-redux';

import { selectRegistrationStatus } from '../../redux/register/register.selectors';

import { ImportantText } from '../../global.styles';

import {
  RegistrationStatusContainer,
  StatusHeaderContainer,
  RegisteredLabel, 
  NotRegisteredLabel 
} from './registration-status.styles';

const RegistrationStatus = ({ status }) => (
  <RegistrationStatusContainer>
    <StatusHeaderContainer>
      Registration&nbsp;
      <ImportantText>Status</ImportantText>
    </StatusHeaderContainer>
    <div>
      {!status ? ( 
        <RegisteredLabel>Not Registered</RegisteredLabel> 
      ) : ( 
        <NotRegisteredLabel>Registered</NotRegisteredLabel>
      )}
    </div>
  </RegistrationStatusContainer>
);

const mapStateToProps = (state, ownProps) => ({
  status: selectRegistrationStatus(ownProps.title)(state)
});

export default connect(mapStateToProps)(RegistrationStatus);
