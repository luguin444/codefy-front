import React, { useContext } from 'react';
import CourseContext from '../../contexts/CourseContext';
import { useParams } from 'react-router-dom';
import { StyledExerciseContainer, StyledQuestion, StyledExercise } from './styles';
import ActivityForm from '../ActivityForm';
import FunctionSolutionBox from '../FunctionSolutionBox';
import FunctionBox from '../FunctionBox';
import ConsoleBox from '../ConsoleBox';

export default function Exercises() {
  const { activities, isSolution } = useContext(CourseContext);
  const { activityId } = useParams();
  const currentExercise = activities.find(a => a.id === parseInt(activityId));
  console.log(currentExercise);
  const statement =
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio architecto ab autem cum quisquam nisi nemo et minus incidunt, esse, magni quia cupiditate numquam eum voluptas eligendi laudantium inventore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tenetur eos vitae qui esse possimus molestias voluptatum praesentium aliquid voluptates perferendis ea placeat error, quae earum repudiandae velit aliquam! Doloribus. <br /> <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime, reprehenderit dolores sunt consequuntur quasi eum vitae soluta explicabo, quo maiores ullam tempora a iure nam. Laborum magni minus odit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam voluptatem iure, cumque architecto saepe consequatur quos. Quam expedita vitae nulla, eius accusantium, porro, quia neque ratione atque aperiam nostrum at. <br /> <br /> <b>Exemplo:</b> <br /> <br /> Quando enviado ... retorna ...
    </p>
  ;

  const baseCode = `
function sumArray(array) {
  //Insira seu código aqui
}
  `;

  const solutionCode = `
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
  `;

  const testCode = `
describe('sumArray', () => {
  it('should return the sum of all numbers from the passed array', () => {
    const array = [2,4,6,8,10];

    const result = sumArray(array);

    expect(result).to.equal(30);
  });

  it('should return 0 when passed an empty array', () => {
    const array = [];

    const result = sumArray(array);

    expect(result).to.equal(0);
  });

  it('should return a negative number when the sum is negative', () => {
    const array = [3, -12, 5, 6, -8];

    const result = sumArray(array);

    expect(result).to.equal(-6);
  });
})
  `;

  const testExercise = {
    position: 'Teste',
    statement,
    baseCode,
    solutionCode,
    testCode
  };

  return (
    currentExercise.statement !== undefined 
    ? (
      <StyledExerciseContainer>
        <StyledQuestion>
          <h1>Exercício {currentExercise.position}</h1>
          <div>
            {currentExercise.statement}
          </div>
          <ActivityForm />
        </StyledQuestion>
        <StyledExercise>
          { isSolution
            ? <FunctionSolutionBox currentExercise={currentExercise}/>
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
          <h1>Exercício {testExercise.position}</h1>
          <div>
            {testExercise.statement}
          </div>
          <ActivityForm />
        </StyledQuestion>
        <StyledExercise>
          { isSolution
            ? <FunctionSolutionBox currentExercise={testExercise}/>
            : (
              <>
                <FunctionBox currentExercise={testExercise}/>
                <ConsoleBox currentExercise={testExercise}/>
              </>                
            )
          }
        </StyledExercise>
      </StyledExerciseContainer>
    )
    
  );
}
