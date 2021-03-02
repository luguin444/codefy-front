import React, { useContext } from 'react';
import StyledFunctionBox from './styles';
import Editor from '@monaco-editor/react';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BsPencil } from 'react-icons/bs';
import CourseContext from '../../contexts/CourseContext';

export default function FunctionBox({ currentExercise, testExercise }) {
  const { baseCode, solutionCode } = currentExercise;
  const { testBaseCode, testSolutionCode } = testExercise;
  
  const { isSolution, setIsSolution } = useContext(CourseContext);

  console.log(isSolution);
  console.log(testBaseCode);
  console.log(testSolutionCode);

  function changeCode() {
    if (currentExercise.baseCode !== undefined) {
      if (isSolution) {
        return solutionCode;
      } else {
        return baseCode;
      }
    } else {
      if (isSolution) {
        return testSolutionCode;
      } else {
        return testBaseCode;
      }
    }
  }

  return (
    <StyledFunctionBox isSolution={isSolution}>
      <header>
        { isSolution 
          ? (
            <>
              <p>Nossa solução</p>
              <button className='advancement' onClick={() => setIsSolution(!isSolution)} >
                <p>Seu Código</p>
                <BsPencil className='function-icon'/>
              </button>
            </>
          )
          : (
            <>
              <p>Seu código</p>
              <button className='advancement' onClick={() => setIsSolution(!isSolution)}>
                <p>Ver Solução</p>
                <HiOutlineLightBulb className='function-icon'/>
              </button>
            </>
          )
        }
      </header>
      <div>
        <Editor
          height="100%"
          theme="vs-dark"
          loading="Loading..."
          defaultLanguage="javascript"
          defaultValue={changeCode()}
        />
      </div>
    </StyledFunctionBox>
  );
}
