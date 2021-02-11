import React from 'react';
import StyledActivityContent from './styles';

export default function ActivityContent({ activity }){
    return (
      <StyledActivityContent>
        {activity.type === 'theorie' ?
          <iframe  
         src={activity.youtubeLink}
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
         title="theory">
          </iframe>
          :
          ''
        }
       
      </StyledActivityContent>
    );
}
