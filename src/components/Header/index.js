import React from 'react';
import StyledHeader from './styles';

export default function Header(){
    return (
      <StyledHeader>
        <ul className="container">
          <li className="logo">codify</li>
          <li className="home">Home</li>
          <li className="courses">Cursos</li>
          <li className="perfil">Perfil</li>
        </ul>
        <div className="user">
          <p>US</p>
        </div>
      </StyledHeader>
    );
}
