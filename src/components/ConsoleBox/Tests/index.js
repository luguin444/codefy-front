import React from 'react';
import { StyledTests, TestTitle, TestMessage } from './styles';

export default function Tests({ id, title, state, error={} }) {
    return (
      <StyledTests>
        { state === 'passed'
            ? (
              <>
                <TestTitle state={state}>
                  <p>Teste {id + 1}: </p>
                  <p>Sucesso!</p>
                </TestTitle>
                <TestMessage>
                  <p>{title}</p>
                </TestMessage>                    
              </>
            )
            : (
              <>
                <TestTitle state={state}>
                  <p>Teste {id + 1}: </p>
                  <p>Erro!</p>
                </TestTitle>
                <TestMessage>
                  <p>{error.message}</p>
                  <p>Detalhes: Esperava retornar {error.expected} e retornou {error.actual}</p>
                </TestMessage>                    
              </>
            )
        }
      </StyledTests>
    );
}
