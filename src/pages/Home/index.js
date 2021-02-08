import React, { useState } from 'react';
import SuggestedCourses from '../../components/SuggestedCourses';
import StyledHome from './styles';

export default function Home(){
    // eslint-disable-next-line no-unused-vars
    const [activeCourses, setActiveCourser] = useState([]);
    const firstName = localStorage.getItem('name').split(' ')[0];

    return (
      <StyledHome>
        <div className="banner">
          <p>Olá, <span className="name">{firstName}</span>!</p>
          <b>{activeCourses.length === 0 ? 'Você não começou nenhum curso ainda. Experimente um! :)' : 'Continue seu curso atual abaixo! :)'}</b>
        </div>
        <SuggestedCourses />
      </StyledHome>
    );
}
