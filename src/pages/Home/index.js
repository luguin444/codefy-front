import React, { useState } from 'react';
import SuggestedCourses from '../../components/SuggestedCourses';
import StyledHome from './styles';

export default function Home(){
    // eslint-disable-next-line no-unused-vars
    const [activeCourses, setActiveCourser] = useState([]);

    return (
      <StyledHome>
        <div className="banner">
          <p>Olá, Pedro!</p>
          <b>{activeCourses.length === 0 ? 'Você não começou nenhum curso ainda. Experimente um! :)' : 'Continue seu curso atual abaixo! :)'}</b>
        </div>
        <SuggestedCourses />
      </StyledHome>
    );
}
