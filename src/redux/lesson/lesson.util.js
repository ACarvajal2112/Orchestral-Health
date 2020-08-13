// if value is present, set hidden to given value, otherwise toggle current value
export const toggleLessonHidden = (isHidden, value) => 
  value ? value : !isHidden;

// returns the first available day of the week based on instructor ID and availability
export const setDefaultDayOfWeek = (lessons, instructorId) => {
  const selectedInstructor = getInstructor(lessons, instructorId);
  return selectedInstructor.availabilities[0].day
};

export const getInstructor = (lessons, instructorId) => {
  const instructors = getAllInstructors(lessons);
  return instructors.find(instructor => instructor.id === instructorId);
};

export const getAllInstructors = lessons => 
  lessons.reduce((accumulatedInstructors, lesson) => {
    accumulatedInstructors.push(lesson.instructor);
    return accumulatedInstructors;
  }, []);


