import React, { useContext } from 'react';
import CourseContext from '../../contexts/CourseContext';
import { useParams } from 'react-router-dom';
import { StyledExerciseContainer, StyledQuestion, StyledExercise } from './styles';
import ActivityForm from '../ActivityForm';
import FunctionBox from '../FunctionBox';
import ConsoleBox from '../ConsoleBox';

export default function Exercises() {
  const { activities, isSolution } = useContext(CourseContext);
  const { activityId } = useParams();
  const currentExercise = activities.find(a => a.id === parseInt(activityId));
  const testStatement = `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio architecto ab autem cum quisquam nisi nemo et minus incidunt, esse, magni quia cupiditate numquam eum voluptas eligendi laudantium inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur eos vitae qui esse possimus molestias voluptatum praesentium aliquid voluptates perferendis ea placeat error, quae earum repudiandae velit aliquam! Doloribus. <br /> <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, reprehenderit dolores sunt consequuntur quasi eum vitae soluta explicabo, quo maiores ullam tempora a iure nam. Laborum magni minus odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatem iure, cumque architecto saepe consequatur quos. Quam expedita vitae nulla, eius accusantium, porro, quia neque ratione atque aperiam nostrum at. <br /> <br /> <b>Exemplo:</b> <br /> <br /> Quando enviado ... retorna ...
    </p>
  `;

  const testBaseCode = `
function minhaFuncao() {
  //Insira seu código aqui
}
  `;

  const testSolutionCode = `
function nossaFuncao() {
  //Aqui estará o código com a solução
}
  `;

  const testExercise = {
    id: 'Teste',
    testStatement,
    testBaseCode,
    testSolutionCode,
    testCode: 'Em breve código de teste'
  };

  return (
    currentExercise.statement !== undefined 
      ? (
        <StyledExerciseContainer>
          <StyledQuestion>
            <h1>Exercício {currentExercise.id}</h1>
            <div>
              {currentExercise.statement}
            </div>
            <ActivityForm />
          </StyledQuestion>
          <StyledExercise>
            { isSolution
              ? <FunctionBox currentExercise={currentExercise}/>
              : (
                <>
                  <FunctionBox currentExercise={currentExercise}/>
                  <ConsoleBox currentExercise={currentExercise}/>
                </>
              )
            }
            
          </StyledExercise>
        </StyledExerciseContainer>
      )
      : (
        <StyledExerciseContainer>
          <StyledQuestion>
            <h1>Exercício {testExercise.id}</h1>
            <div>
              {testExercise.testStatement}
            </div>
            <ActivityForm />
          </StyledQuestion>
          <StyledExercise>
            { isSolution
              ? <FunctionBox currentExercise={currentExercise} testExercise={testExercise}/>
              : (
                <>
                  <FunctionBox currentExercise={currentExercise} testExercise={testExercise}/>
                  <ConsoleBox currentExercise={currentExercise} testExercise={testExercise}/>
                </>
              )
            }
            
          </StyledExercise>
        </StyledExerciseContainer>
      )
    
  );
}
