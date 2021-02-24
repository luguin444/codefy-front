import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import StyledActivitieProgress from './styles';

export default function ActivitieProgress({ progress , activity }){
    return (
      <StyledActivitieProgress>
        
        <div className="progress-container">
          {
          progress.map((p, i) => {
            return (
              <span key={i}>
                <div  className={JSON.stringify(activity) === JSON.stringify(p) ? 'each-content now' : 'each-content grey'}>
                  <BsCircleFill />
                  <p>{p.type === 'theory' ? 'Teoria' : 'Exercício'}</p>
                </div>
                {i !== progress.length - 1 && <div className="bar"></div>}
              </span>
            );
          })
        }
        </div>
      </StyledActivitieProgress>
    );
}
