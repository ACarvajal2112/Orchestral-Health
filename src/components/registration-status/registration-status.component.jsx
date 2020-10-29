import React from 'react';
import { connect } from 'react-redux';

import { selectRegistrationStatus } from '../../redux/register/register.selectors';

import {
  RegistrationStatusContainer,
  StatusHeaderContainer,
  RegisteredLabel, 
  NotRegisteredLabel 
} from './registration-status.styles';

const RegistrationStatus = ({ status }) => (
  <RegistrationStatusContainer>
    <StatusHeaderContainer>Registration Status</StatusHeaderContainer>
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
