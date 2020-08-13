export const addLessonToRegister = (currentLessons, lessonToAdd) => {
  console.log({currentLessons});
  console.log({lessonToAdd});
  const existingLesson = currentLessons.find(
    lesson => lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
  );
  if (existingLesson) {
    console.log('lesson exists');
    return currentLessons.map(lesson => 
      lesson.title === lessonToAdd.title && lesson.dayOfWeek === lessonToAdd.dayOfWeek
        ? { ...lesson, times: [...lesson.times, lessonToAdd.time] }
        : lesson
    );
  };
  console.log('lesson does not exist');
  const { title, time, dayOfWeek } = lessonToAdd; 
  return [ ...currentLessons, { 
    title,
    dayOfWeek,
    times: [time],
   } ];
};
