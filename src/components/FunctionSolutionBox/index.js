import React, { useContext } from 'react';
import StyledSolutionBox from './styles';
import Editor from '@monaco-editor/react';
import { BsPencil } from 'react-icons/bs';
import CourseContext from '../../contexts/CourseContext';

export default function FunctionSolutionBox({ currentExercise }) {
  const { solutionCode } = currentExercise;
  const { isSolution, setIsSolution } = useContext(CourseContext);

  return (
    <StyledSolutionBox>
      <header>
        <p>Nossa solução</p>
        <button className='advancement' onClick={() => setIsSolution(!isSolution)} >
          <p>Seu Código</p>
          <BsPencil className='function-icon'/>
        </button>
      </header>
      <div>
        <Editor
          height="100%"
          theme="vs-dark"
          loading="Loading..."
          defaultLanguage="javascript"
          options={{
            readOnly: true,
          }}
          value={ solutionCode }
        />
      </div>
    </StyledSolutionBox>
  );
}
