import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import CourseContext from '../../contexts/CourseContext';
import StyledActivity from './styles';

export default function Activity(){
  const { courseId, chapterId, topicId, activityType, activityId } = useParams();
  const { courseContext, setCourseContext } = useContext(CourseContext);
  const [chapter, setChapter] = useState(null);
  const [topic, setTopic] = useState(null);
  const [theory, setTheory] = useState(null);
  const [exercise, setExercise] = useState(null);
  const history = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!courseContext || courseContext.id !== parseInt(courseId)) {
      axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, { headers: { 'X-Access-Token': token } })
      .then(resp => {
        setCourseContext(resp.data);
        const chapterNeeded = resp.data.chapters.find(c => c.id === parseInt(chapterId));
        setChapter(chapterNeeded);
        const topicNeeded = chapterNeeded.topics.find(t => t.id === parseInt(topicId));
        setTopic(topicNeeded);
        if (activityType === 'theory'){
          const activityNeeded = topicNeeded.theories.find(a => a.id === parseInt(activityId));
          setTheory(activityNeeded);
        } else {
          const activityNeeded = topicNeeded.exercises.find(a => a.id === parseInt(activityId));
          setExercise(activityNeeded);
        }
      });
    } else {
      const chapterNeeded = courseContext.chapters.find(c => c.id === parseInt(chapterId));
      setChapter(chapterNeeded);
      const topicNeeded = chapterNeeded.topics.find(t => t.id === parseInt(topicId));
      setTopic(topicNeeded);
      if (activityType === 'theory'){
        const activityNeeded = topicNeeded.theories.find(a => a.id === parseInt(activityId));
        setTheory(activityNeeded);
      } else {
        const activityNeeded = topicNeeded.exercises.find(a => a.id === parseInt(activityId));
        setExercise(activityNeeded);
      }
    }
  }, [courseId, chapterId, topicId, activityType, activityId]);

  function handleActivity(){
    if (activityType === 'theory'){
      const theoryIds = topic.theories.map(t => t.id);
      const currentTheory = theoryIds.indexOf(theory.id);
      if (currentTheory !== theoryIds.length - 1){
        history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${topicId}/theory/${topic.theories[currentTheory + 1].id}`);
      } else {
        history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${topicId}/exercise/${topic.exercises[0].id}`);
      }
    } else if (activityType === 'exercise'){
      const exerciseIds = topic.exercises.map(e => e.id);
      const currentExercise = exerciseIds.indexOf(exercise.id);
      const topicsIds = chapter.topics.map(t => t.id);
      const currentTopic = topicsIds.indexOf(topic.id);
      const chaptersIds = courseContext.chapters.map(c => c.id);
      const currentChapter = chaptersIds.indexOf(chapter.id);
      if (currentExercise !== exerciseIds.length - 1){
        history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${topicId}/exercise/${topic.exercises[currentExercise + 1].id}`);
      } else if (currentTopic !== chapter.topics.length - 1){
        history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${chapter.topics[currentTopic + 1].id}/theory/${chapter.topics[currentTopic + 1].theories[0].id}`);
      } else if (currentChapter !== courseContext.chapters.length - 1 && courseContext.chapters[currentChapter + 1].topics[0].theories.length !== 0){
        history.push(`/courses/${courseId}/chapter/${courseContext.chapters[currentChapter + 1].id}/topic/${courseContext.chapters[currentChapter + 1].topics[0].id}/theory/${courseContext.chapters[currentChapter + 1].topics[0].theories[0].id}`);
      } else {
        history.push('/home');
      }
    }
  }
  return (
    <StyledActivity>
      {
        chapter && topic && 
          <ActivityHeader 
          chapter={chapter.name} 
          topic={topic.name} 
          />
      }
      
      {
        topic && (theory || exercise) &&
        <ActivityProgress 
        theories={topic.theories} 
        exercises={topic.exercises}
        activity={activityType === 'theory' ? theory : exercise} 
        />
      }
      
      {
        (theory || exercise) &&
        <ActivityContent 
        activity={activityType === 'theory' ? theory : exercise}
        activityType={activityType} 
        />
      }
      
      <form className="next-container">
        <div className="checkbox-container">
          <div className="checkbox"></div> 
          <p>Marcar como concluído</p>
        </div>
        <button type='button' onClick={() => handleActivity()}>Avançar {'>>'}</button>
      </form>
    </StyledActivity>
    );
}
