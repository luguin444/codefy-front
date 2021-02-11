import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import StyledActivitieProgress from './styles';

export default function ActivitieProgress({ activities }){
    return (
      <StyledActivitieProgress>
        
        <div className="progress-container">
          {
          activities.map((a, i) => {
            return (
              <>
                <div className="each-content">
                  <BsCircleFill />
                  <p>{a.type === 'theorie' ? 'Teoria' : 'Exercício'}</p>
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
