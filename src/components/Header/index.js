import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StyledHeader from './styles';

export default function Header(){
  const currentRoute = useLocation();
  const name = localStorage.getItem('name');

  if (currentRoute.pathname === '/' || currentRoute.pathname === '/activities') {
    return null;
  }

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
        <p>{name[0]}</p>
      </div>
    </StyledHeader>
  );
}
