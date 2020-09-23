import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RegistrationStatus from './registration-status.component';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const RegistrationStatusContainer = connect(mapStateToProps)(RegistrationStatus);

export default RegistrationStatusContainer;
