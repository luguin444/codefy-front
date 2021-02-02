import React from 'react';
import StyledHeader from './styledHeader';

export default function Header(){
    return(
        <StyledHeader>
            <ul className="container">
                <li className="logo">codify</li>
                <li>Home</li>
                <li>Cursos</li>
                <li>Perfil</li>
            </ul>
            <div className="user">
                <p>US</p>
            </div>
        </StyledHeader>
    )
}