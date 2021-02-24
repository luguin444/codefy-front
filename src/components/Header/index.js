import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import StyledHeader from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Header(){
  const currentRoute = useLocation();
  const name = localStorage.getItem('name');

  if (currentRoute.pathname === '/' || currentRoute.pathname.includes('/courses')) {
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
      </ul>
      <div className='user'>
        <Avatar name={name} round={true} size="4em" maxInitials={2}/>
      </div>
    </StyledHeader>
  );
}
