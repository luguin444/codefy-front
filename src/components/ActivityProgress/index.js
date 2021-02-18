import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import StyledActivitieProgress from './styles';

export default function ActivitieProgress({ theories, exercises, activity }){
  const activities = [...theories, ...exercises];
  
    return (
      <StyledActivitieProgress>
        
        <div className="progress-container">
          {
          activities.map((a, i) => {
            return (
              <>
                <div  className={JSON.stringify(activity) === JSON.stringify(a) ? 'each-content now' : 'each-content grey'}>
                  <BsCircleFill />
                  <p>{a.youtubeLink ? 'Teoria' : 'Exercício'}</p>
                </div>
                {i !== activities.length - 1 && <div className="bar"></div>}
              </>
            );
          })
        }
        </div>
      </StyledActivitieProgress>
    );
}
