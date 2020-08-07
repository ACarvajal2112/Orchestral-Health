/* returns the first available day of the week based on instructor ID and availability */
export const setDefaultDayOfWeek = (lessons, instructorId) => {
  const instructors = getAllInstructors(lessons);
  const selectedInstructor = instructors.find(instructor => instructor.id === instructorId);
    return selectedInstructor.availabilities[0].day.slice(0,3)
};

export const getAllInstructors = lessons => 
  lessons.reduce((accumulatedInstructors, lesson) => {
    accumulatedInstructors.push(lesson.instructor);
    return accumulatedInstructors;
  }, []);
