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
  const { courseContext, setCourseContext, activities } = useContext(CourseContext);
  const [activity, setActivity] = useState(null);
  const [progress, setProgress] = useState(null);
  const [end, setEnd] = useState(false);
  const history = useHistory();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!courseContext || courseContext.id !== parseInt(courseId)) {
      axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}/activities`, { headers: { 'X-Access-Token': token } })
      .then(resp => {
        setCourseContext(resp.data);
      });
    } else {
      getActivity();
      getProgress();
    }
  }, [courseId, chapterId, topicId, activityType, activityId]);

  useEffect(() => {
    if (activities) getActivity();
    if (activities) getProgress();
  }, [activities]);

  function getActivity(){
    const currentActivity = activities.find(a => a.type === activityType && a.id === parseInt(activityId));
    setActivity(currentActivity);
  }

  function getProgress(){
    const topicActivities = activities.filter(a => a.topicId === parseInt(topicId));
    setProgress(topicActivities);
  }

  function handleActivity(){
    const activityIndex = activities.findIndex(a => a.type === activity.type && a.id === activity.id);
    if (activityIndex === activities.length - 2){
      setEnd(true);
    }
    history.push(`/course/${courseId}/chapter/${activities[activityIndex + 1].chapterId}/topic/${activities[activityIndex + 1].topicId}/${activities[activityIndex + 1].type}/${activities[activityIndex + 1].id}`);
  }
  return (
    <StyledActivity>
      {
        activity &&
          <ActivityHeader 
          chapter={activity.chapterName} 
          topic={activity.topicName}
          chapters={courseContext.chapters} 
          />
      }
      
      {
        progress &&
        <ActivityProgress 
        progress={progress}
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
        {
          !end && <button type='button' onClick={() => handleActivity()}>Avançar {'>>'}</button>
        }
      </form>
    </StyledActivity>
    );
}
