import React, { useState } from 'react';
import { StyledConsoleBox, StyledDisplayTests } from './styles';
import { FiChevronsRight } from 'react-icons/fi';
import Tests from './Tests';
import { runTests } from '@bootcamp-ra/mocha-as-promised';

export default function ConsoleBox({ currentExercise }) {
  const { id, testCode } = currentExercise;
  const codeToTest = localStorage.getItem(`code${id}`);
  const [displayTests, setDisplayTests] = useState(null);

  async function callTests() {
    const result = await runTests(codeToTest, testCode);

    setDisplayTests(result.suites[0]);
  }

  return (
    <StyledConsoleBox>
      <header>
        <p>Console</p>
        <button className='test' onClick={callTests}>
          <p>Rodar testes</p>
          <FiChevronsRight className='function-icon'/>
        </button>
      </header>
      <StyledDisplayTests>
        { displayTests === null
          ? <p>Rode os testes para verificar seu código</p>
          : (
            <ul>
              {displayTests.map((t, i) => <Tests key={i} id={i} title={t.title} state={t.state} error={t.error}/>)}
            </ul>
          )
        } 
      </StyledDisplayTests>
    </StyledConsoleBox>
  );
}
