import React, { useContext, useState } from 'react';
import axios from 'axios';
import StyledActivityForm from './styles';
import { BsCheck } from 'react-icons/bs';
import CourseContext from '../../contexts/CourseContext';
import { useHistory, useParams } from 'react-router-dom';

export default function ActivityForm() {
  const { courseId, activityType, activityId } = useParams();
  const [end, setEnd] = useState(false);
  const { activity, activities, setActivities, done, setDone } = useContext(CourseContext);
  const history = useHistory();
  const token = localStorage.getItem('token');

  function handleActivity() {
    if (done) {
      axios.post(`${process.env.API_BASE_URL}/clients/activities/${activityType}/${activityId}`, {}, { headers: { 'X-Access-Token': token } })
      .then(() => {
        const newActivities = activities;
        const index = newActivities.findIndex(n => n.type === activityType && n.id === parseInt(activityId));
        newActivities[index].done = true;
        setActivities(newActivities);
      }).catch(() => alert('erro'));
    }

    if (end) {
      history.push('/home');
    } else {
      const activityIndex = activities.findIndex(a => a.type === activity.type && a.id === activity.id);
      if (activityIndex === activities.length - 2) {
        setEnd(true);
      }
      history.push(`/course/${courseId}/chapter/${activities[activityIndex + 1].chapterId}/topic/${activities[activityIndex + 1].topicId}/${activities[activityIndex + 1].type}/${activities[activityIndex + 1].id}`);
    }
  }

  return (
    <StyledActivityForm>
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
    </StyledActivityForm>
  );
}
