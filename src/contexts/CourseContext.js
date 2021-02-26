import React, { createContext, useEffect, useState } from 'react';

const CourseContext = createContext();
export default CourseContext;

export function CourseProvider({ children }) {
  const [courseContext, setCourseContext] = useState(null);
  const [activities, setActivities] = useState(null);
  const [activity, setActivity] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (courseContext) {
      organizeActivities();
    }
  }, [courseContext]);

  function organizeActivities() {
    const activities = [];
    for (let i = 0; i < courseContext.chapters.length; i++) {
      const currentChapter = courseContext.chapters[i];

      for (let j = 0; j < currentChapter.topics.length; j++) {
        const currentTopic = currentChapter.topics[j];
        if (currentTopic.theory) {
          activities.push({
            type: 'theory', 
            id: currentTopic.theory.id, 
            youtubeLink: currentTopic.theory.youtubeLink,
            done: currentTopic.theory.theoryUsers.length > 0,
            chapterId: currentChapter.id,
            chapterName: currentChapter.name,
            topicId: currentTopic.id,
            topicName: currentTopic.name,
          });
        }
        if (currentTopic.exercises.length !== 0) {
          for (let k = 0; k < currentTopic.exercises.length; k++) {
            const currentExercise = currentTopic.exercises[k];
            activities.push({
              type: 'exercise',
              id: currentExercise.id,
              title: currentExercise.title,
              done: currentExercise.exerciseUsers.length > 0,
              chapterId: currentChapter.id,
              chapterName: currentChapter.name,
              topicId: currentTopic.id,
              topicName: currentTopic.name,
            });
          }
        }
      }
    }
    setActivities(activities);
  }

  return (
    <CourseContext.Provider value={
      { courseContext, 
        setCourseContext, 
        activities, 
        setActivities, 
        done, 
        setDone,
        activity,
        setActivity
      }
    }>
      {children}
    </CourseContext.Provider>
  );
}
