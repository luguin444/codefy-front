import React, { useContext } from 'react';
import StyledFunctionBox from './styles';
import Editor from '@monaco-editor/react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import CourseContext from '../../contexts/CourseContext';

export default function FunctionBox({ currentExercise }) {
  const { baseCode } = currentExercise;
  const { isSolution, setIsSolution } = useContext(CourseContext);

  console.log(isSolution);
  console.log(baseCode);

  return (
    <StyledFunctionBox>
      <header>
        <p>Seu código</p>
        <button className='advancement' onClick={() => setIsSolution(!isSolution)}>
          <p>Ver Solução</p>
          <HiOutlineLightBulb className='function-icon'/>
        </button>
      </header>
      <div>
        <Editor
          height="100%"
          theme="vs-dark"
          loading="Loading..."
          defaultLanguage="javascript"
          value={ baseCode }
        />
      </div>
    </StyledFunctionBox>
  );
}
