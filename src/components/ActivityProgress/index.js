import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BsCircleFill } from 'react-icons/bs';
import StyledActivitieProgress from './styles';

export default function ActivitieProgress({ progress , activity }) {
  const { courseId } = useParams();
  const history = useHistory();

  function handleClick(chapterId, topicId, activityType, activityId) {
    history.push(`/course/${courseId}/chapter/${chapterId}/topic/${topicId}/${activityType}/${activityId}`);
  }

  return (
    <StyledActivitieProgress> 
      <div className="progress-container">
        {
          progress.map((p, i) => {
            return (
              <span key={i}>
                <div  
                className={
                JSON.stringify(activity) === JSON.stringify(p) ? 
                'each-content now' :
                p.done ? 
                'each-content done' :
                'each-content grey'
                }>
                  <BsCircleFill onClick={() => handleClick(p.chapterId, p.topicId, p.type, p.id)} />
                  <p>{p.type === 'theory' ? 'Teoria' : 'Exercício'}</p>
                </div>
                {i !== progress.length - 1 && <div className={p.done ? 'bar-done' : 'bar'}></div>}
              </span>
            );
          })
        }
      </div>
    </StyledActivitieProgress>
  );
}
