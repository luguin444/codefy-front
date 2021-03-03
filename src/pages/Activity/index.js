import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import CourseContext from '../../contexts/CourseContext';
import StyledActivity from './styles';

export default function Activity() {
  const { courseId, chapterId, topicId, activityType, activityId } = useParams();
  const { courseContext, setCourseContext, activities, setDone, activity, setActivity } = useContext(CourseContext);
  const [progress, setProgress] = useState(null);
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
    if (activities) {
      getActivity();
      getProgress();
    }
  }, [activities]);

  function getActivity() {
    const currentActivity = activities.find(a => a.type === activityType && a.id === parseInt(activityId));
    setActivity(currentActivity);
    if (currentActivity.done) {
      setDone(true);
    } else {
      setDone(false);
    }
  }

  function getProgress() {
    const topicActivities = activities.filter(a => a.topicId === parseInt(topicId));
    setProgress(topicActivities);
  }

  return (
    <StyledActivity>
      {
        activity &&
        <ActivityHeader 
        chapter={activity.chapterName} 
        topic={activity.topicName}
        activities={activities}
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
    </StyledActivity>
  );
}
