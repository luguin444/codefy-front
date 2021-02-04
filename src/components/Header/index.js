import React from 'react';
import { useLocation } from 'react-router-dom';
import StyledHeader from './styledHeader';

export default function Header(){
    const currentRoute = useLocation();

    if(currentRoute.pathname === '/') {
        return <></>
    }

    return(
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