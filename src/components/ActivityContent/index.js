import React from 'react';
import StyledActivityContent from './styles';

export default function ActivityContent(){
    return (
      <StyledActivityContent>
        <iframe  
        src="https://www.youtube.com/embed/Ptbk2af68e8" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen 
        title="theory">
        </iframe>
      </StyledActivityContent>
    );
}
