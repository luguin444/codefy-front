import React from 'react';
import StyledActivityContent from './styles';

export default function ActivityContent({ activity, activityType }){
    return (
      <StyledActivityContent>
        {activityType === 'theory' ?
          <iframe  
         src={activity.youtubeLink}
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
         title="theory">
          </iframe>
          :
          <h1>Exercício em breve</h1>
        }
       
      </StyledActivityContent>
    );
}
