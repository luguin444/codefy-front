import React from 'react';
import styled from 'styled-components';
import Topic from './Topic';

export default function Accordeon () {
    return (
        <Container>
            <Topic text="Apresentação" content="2 aulas - 5 exercicios" />
            <Topic text="Preparando o ambiente" content="2 aulas - 5 exercicios" />
            <Topic text="Introdução a JS" content="2 aulas - 5 exercicios"/>
            <Topic text="Váriaveis" content="2 aulas - 5 exercicios"/>
            <Topic text="Condicionais" content="2 aulas - 5 exercicios"/>
        </Container>
    );
}

const Container =  styled.section`
    margin: 5rem auto;
    width: 90%;
    max-width: 1200px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
`;
