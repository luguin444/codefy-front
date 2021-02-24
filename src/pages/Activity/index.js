import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import CourseContext from '../../contexts/CourseContext';
import StyledActivity from './styles';

export default function Activity(){
  const { courseId, chapterId, topicId, activityType, activityId } = useParams();
  const { courseContext, setCourseContext, activities, setActivities } = useContext(CourseContext);
  const [activity, setActivity] = useState(null);
  const [progress, setProgress] = useState(null);
  const [end, setEnd] = useState(false);
  const [done, setDone] = useState(false);
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
    if (currentActivity.done){
      setDone(true);
    } else {
      setDone(false);
    }
  }

  function getProgress(){
    const topicActivities = activities.filter(a => a.topicId === parseInt(topicId));
    setProgress(topicActivities);
  }

  function handleActivity(){
    if (done){
      axios.post(`${process.env.API_BASE_URL}/clients/activities/${activityType}/${activityId}`, {}, { headers: { 'X-Access-Token': token } })
      .then(() => {
        const newActivities = activities;
        const index = newActivities.findIndex(n => n.type === activityType && n.id === parseInt(activityId));
        newActivities[index].done = true;
        setActivities(newActivities);
      }).catch(() => alert('erro'));
    }
    if (end){
      history.push('/home');
    } else {
      const activityIndex = activities.findIndex(a => a.type === activity.type && a.id === activity.id);
      if (activityIndex === activities.length - 2){
      setEnd(true);
      }
      history.push(`/course/${courseId}/chapter/${activities[activityIndex + 1].chapterId}/topic/${activities[activityIndex + 1].topicId}/${activities[activityIndex + 1].type}/${activities[activityIndex + 1].id}`);
    }
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
        <div className="checkbox-container" 
        onClick={() => setDone(!done)}
        onKeyPress={() => setDone(!done)}
        aria-hidden="true"
        >
          <div className={done ? 'checkbox checked' : 'checkbox'}>
            {
              done &&
              <BsCheck className="check" />
            }
          </div> 
          <p className={done ? 'check' : ''}>Marcar como concluído</p>
        </div>
        <button type='button' onClick={() => handleActivity()}>{!end ? 'Avançar' : 'Finalizar'}{'>>'}</button>
      </form>
    </StyledActivity>
    );
}
