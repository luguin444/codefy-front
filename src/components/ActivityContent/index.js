import React from 'react';
import StyledActivityContent from './styles';
import ReactPlayer from 'react-player/youtube';

export default function ActivityContent({ activity, activityType }){
    return (
      <StyledActivityContent>
        {activityType === 'theory' ?
          <ReactPlayer url={activity.youtubeLink} className='react-player' />
          :
          <h1>{activity ? activity.title : 'Exercício em breve'}</h1>
        }
       
      </StyledActivityContent>
    );
}
