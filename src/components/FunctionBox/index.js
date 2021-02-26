import React from 'react';
import StyledFunctionBox from './styles';
import Editor from '@monaco-editor/react';
import { HiOutlineLightBulb } from 'react-icons/hi';

export default function FunctionBox() {
    const defaultValue = `
    function minhaFuncao() {
        // Insira seu código aqui
    }
    `;

  return (
    <StyledFunctionBox>
      <header>
        <p>Seu código</p>
        <div>
          <p>Ver Solução</p>
          <HiOutlineLightBulb />
        </div>
      </header>
      <div>
        <Editor
            height="100%"
            theme="vs-dark"
            loading="Loading..."
            defaultLanguage="javascript"
            defaultValue={defaultValue}
        />
      </div>
    </StyledFunctionBox>
  );
}
