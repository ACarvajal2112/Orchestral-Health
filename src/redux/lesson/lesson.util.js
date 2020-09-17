// Returns the first available day of week based on instructor ID and availability.
export const setDefaultDayOfWeek = (lessons, instructorId) => {
  const lessonsArray = Object.keys(lessons).map(key => lessons[key]);
  const selectedInstructor = getInstructor(lessonsArray, instructorId);
  return selectedInstructor.availabilities[0].day
};

// Returns an instructor from a list of lessons based on the instructor ID.
export const getInstructor = (lessons, instructorId) => {
  const instructors = getAllInstructors(lessons);
  return instructors.find(instructor => instructor.id === instructorId);
};

// Returns list of instructors based on the list of lessons passed.
export const getAllInstructors = lessons => 
  lessons.reduce((accumulatedInstructors, lesson) => {
    accumulatedInstructors.push(lesson.instructor);
    return accumulatedInstructors;
  }, []);
