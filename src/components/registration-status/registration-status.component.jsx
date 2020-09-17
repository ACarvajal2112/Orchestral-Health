import React from 'react';

import { selectRegisterStatus } from '../../redux/register/register.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  RegistrationStatusContainer,
  StatusHeaderContainer,
  RegisteredLabel, 
  NotRegisteredLabel 
} from './registration-status.styles';

const RegistrationStatus = ({ status }) => (
  <RegistrationStatusContainer>
    <StatusHeaderContainer>
      Registration status
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

const mapStateToProps = createStructuredSelector({
  status: selectRegisterStatus
});

export default connect(mapStateToProps)(RegistrationStatus);
