import React, { useRef, useState  } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import StyledHeader from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';
// import useOutsideClick from '../../hooks/useOutsideClick';
import { useDetectClickOutside } from 'react-detect-click-outside';

export default function Header(){
  const history = useHistory();
  const [dropDownisClosed, setDropDownisClosed] = useState(true);
  const currentRoute = useLocation();
  const name = localStorage.getItem('name');
  const token = localStorage.getItem('token');
  
  if (currentRoute.pathname === '/' || currentRoute.pathname.includes('theory') || currentRoute.pathname.includes('exercise') || currentRoute.pathname.includes('/recover-password') || currentRoute.pathname.includes('topic')) {
    return null;
  }

  const ref = useDetectClickOutside({ onTriggered: () => setDropDownisClosed(true) });

  // useOutsideClick(ref, () => {
  //   if (!dropDownisClosed) setDropDownisClosed(true);
  // });

  function changePage() {
    setDropDownisClosed(true);
    history.push('/perfil');
  }

  function signOut() {
    axios.post(`${process.env.API_BASE_URL}/clients/logout`, {}, { headers: { 'X-Access-Token': token } })
    .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setDropDownisClosed(true);
        history.push('/');
    })
    .catch(() => {
        alert('Erro ao efetuar Sign out');
    });
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
      <div className='user' >
        {
          dropDownisClosed ?  
            <IoIosArrowDown className="icon" onClick={() => setDropDownisClosed(!dropDownisClosed)}/> : 
            <div ref={ref} >
              <ul className="dropDown" >
                <li onClick={() => changePage()}> Perfil </li>
                <li onClick={() => signOut()}> Sair </li>
              </ul>
              <IoIosArrowUp className="icon" onClick={() => setDropDownisClosed(!dropDownisClosed)}/>
            </div>
        }
        <Avatar name={name} round={true} size="4em" maxInitials={2}/>
      </div>
    </StyledHeader>
  );
}
