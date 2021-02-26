import React from 'react';
import StyledConsoleBox from './styles';
import { FiChevronsRight } from 'react-icons/fi';

export default function ConsoleBox() {
  return (
    <StyledConsoleBox>
      <header>
        <p>Console</p>
        <div>
          <p>Rodar testes</p>
          <FiChevronsRight />
        </div>
      </header>
      <div>
        <p>Rode os testes para verificar seu código</p>
      </div>
    </StyledConsoleBox>
  );
}
