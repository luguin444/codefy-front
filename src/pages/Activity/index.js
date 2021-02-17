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
  const [chapterIndex, setChapterIndex] = useState(0);
  const [topicIndex, setTopicIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const history = useHistory();
  const token = localStorage.getItem('token');
  console.log(courseContext);

  function findIndex(){
    const chaptersIds = courseContext.chapters.map(c => c.id);
    const indexChapterId = chaptersIds.indexOf(parseInt(chapterId));
    console.log(courseId);
    console.log(chapterId);
    console.log(topicId);
    console.log(activityId);
    const topicsIds = courseContext.chapters[indexChapterId].topics.map(t => t.id);
    const indexTopicId = topicsIds.indexOf(parseInt(topicId));
    const activitiesIds = courseContext.chapters[indexChapterId].topics[indexTopicId].activities.map(a => a.id);
    const indexActivityId = activitiesIds.indexOf(parseInt(activityId));
    setChapterIndex(indexChapterId);
    setActivityIndex(indexActivityId);
    setTopicIndex(indexTopicId);
  }

  useEffect(() => {
    if (!courseContext) {
      axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, { headers: { 'X-Access-Token': token } })
      .then(resp => {
        setCourseContext(resp.data);
        findIndex();
      });
    } else {
      findIndex();
    }
  }, [chapterIndex, topicIndex, activityIndex]);
    // eslint-disable-next-line no-unused-vars
    const [chapters, setChapters] = useState();
 
  function handleActivity(){
    if (courseContext.chapters[chapterIndex].topics[topicIndex].activities[activityIndex + 1]){
      history.push(`/courses/${courseId}/chapter/${courseContext.chapters[chapterIndex].id}/topic/${courseContext.chapters[chapterIndex].topics[topicIndex].id}/activity/${courseContext.chapters[chapterIndex].topics[topicIndex].activities[activityIndex + 1].id}`);
    } else if (courseContext.chapters[chapterIndex].topics[topicIndex + 1]){
      history.push(`/courses/${courseId}/chapter/${courseContext.chapters[chapterIndex].id}/topic/${courseContext.chapters[chapterIndex].topics[topicIndex + 1].id}/activity/${courseContext.chapters[chapterIndex].topics[topicIndex + 1].activities[0].id}`);
    } else if (courseContext.chapters[chapterIndex + 1]){
      history.push(`/courses/${courseId}/chapter/${courseContext.chapters[chapterIndex + 1].id}/topic/${courseContext.chapters[chapterIndex + 1].topics[0].id}/activity/${courseContext.chapters[chapterIndex + 1].topics[0].activities[0].id}`);
    } else {
      history.push('/home');
    }
  }
  return (
    <StyledActivity>
      <ActivityHeader 
      chapter={courseContext.chapters[chapterIndex].name} 
      topic={courseContext.chapters[chapterIndex].topics[topicIndex].name} 
      />
      <ActivityProgress 
      activities={courseContext.chapters[chapterIndex].topics[topicIndex].activities} 
      activity={activityIndex} 
      />
      <ActivityContent 
      activity={courseContext.chapters[chapterIndex].topics[topicIndex].activities[activityIndex]} 
      />
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
