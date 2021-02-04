import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles';

export default function Header(){
    return (
      <StyledHeader>
        <ul className="container">
              
          <li className="logo">
            <Link to='/home'>
              codify
            </Link>
          </li>
          <li className="home">
            <Link to='/home'>
              Home
            </Link>
          </li>
          <li className="courses">Cursos</li>
          <li className="perfil">Perfil</li>
        </ul>
        <div className="user">
          <p>US</p>
        </div>
      </StyledHeader>
    );
}
