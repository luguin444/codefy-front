import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import CourseContext from '../../contexts/CourseContext';
import StyledActivity from './styles';

export default function Activity(){
  const { courseId, chapterId, topicId, activityId } = useParams();
  const { courseContext, setCourseContext } = useContext(CourseContext);
  const [chapter, setChapter] = useState(null);
  const [topic, setTopic] = useState(null);
  const [activity, setActivity] = useState(null);
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
        const activityNeeded = topicNeeded.activities.find(a => a.id === parseInt(activityId));
        setActivity(activityNeeded);
      });
    } else {
      const chapterNeeded = courseContext.chapters.find(c => c.id === parseInt(chapterId));
      setChapter(chapterNeeded);
      const topicNeeded = chapterNeeded.topics.find(t => t.id === parseInt(topicId));
      setTopic(topicNeeded);
      const activityNeeded = topicNeeded.activities.find(a => a.id === parseInt(activityId));
      setActivity(activityNeeded);
    }
  }, [courseId, chapterId, topicId, activityId]);

  function handleActivity(){
    const activitiesIds = topic.activities.map(a => a.id);
    const currentActivity = activitiesIds.indexOf(activity.id);
    const topicsIds = chapter.topics.map(t => t.id);
    const currentTopic = topicsIds.indexOf(topic.id);
    const chaptersIds = courseContext.chapters.map(c => c.id);
    const currentChapter = chaptersIds.indexOf(chapter.id);
    if (currentActivity !== topic.activities.length - 1){
      history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${topicId}/activity/${topic.activities[currentActivity + 1].id}`);
    } else if (currentTopic !== chapter.topics.length - 1){
      history.push(`/courses/${courseId}/chapter/${chapterId}/topic/${chapter.topics[currentTopic + 1].id}/activity/${chapter.topics[currentTopic + 1].activities[0].id}`);
    } else if (currentChapter !== courseContext.chapters.length - 1){
      history.push(`/courses/${courseId}/chapter/${courseContext.chapters[currentChapter + 1].id}/topic/${courseContext.chapters[currentChapter + 1].topics[0].id}/activity/${courseContext.chapters[currentChapter + 1].topics[0].activities[0].id}`);
    } else {
      history.push('/home');
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
        topic && activity &&
        <ActivityProgress 
        activities={topic.activities} 
        activity={activity} 
        />
      }
      
      {
        activity &&
          <ActivityContent 
        activity={activity} 
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
