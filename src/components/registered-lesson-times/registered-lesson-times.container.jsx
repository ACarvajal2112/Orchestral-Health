import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RegisteredLessonTimes from './registered-lesson-times.component';

import { selectLessonTitle } from '../../redux/lesson/lesson.selectors';

const mapStateToProps = createStructuredSelector({
  title: selectLessonTitle
});

const RegisteredLessonTimesContainer = connect(mapStateToProps)(RegisteredLessonTimes);

export default RegisteredLessonTimesContainer;
