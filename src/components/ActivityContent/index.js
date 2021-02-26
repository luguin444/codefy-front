import React from 'react';
import StyledActivityContent from './styles';
import ReactPlayer from 'react-player/youtube';
import Exercises from '../Exercises';
import ActivityForm from '../ActivityForm';

export default function ActivityContent({ activity }) {
  return (
    <StyledActivityContent>
      {activity.type === 'theory' 
        ? (
          <>
            <ReactPlayer url={activity.youtubeLink} className='react-player' />
            <ActivityForm />
          </>
        )
        : <Exercises />
      }
    </StyledActivityContent>
  );
}
