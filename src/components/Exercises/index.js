import React from 'react';
// import axios from 'axios';
// import CourseContext from '../../contexts/CourseContext';
// import { useParams } from 'react-router-dom';
import { StyledExerciseContainer, StyledQuestion, StyledExercise } from './styles';
import ActivityForm from '../ActivityForm';
import FunctionBox from '../FunctionBox';
import ConsoleBox from '../ConsoleBox';

export default function Exercises() {
//   const { activities } = useContext(CourseContext);
//   const { activityId } = useParams();
//   const currentExercise = activities.find(a => a.id === activityId);
  const currentExercise = {
    id: 1,
    title: 'Exercício 1',
  };

//   useEffect(() => {
//     axios.get(`${process.env.API_BASE_URL}/clients/activities/exercise/${currentExercise.id}`);
//   },[]);

  return (
    <StyledExerciseContainer>
      <StyledQuestion>
        <h1>{currentExercise.title}</h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem impedit dolores corporis explicabo quasi quaerat, tempora esse reiciendis saepe blanditiis necessitatibus recusandae ipsum nisi sed facere minus nam atque quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur perferendis aliquid? Nesciunt cumque nisi sit quisquam, doloremque sapiente praesentium non odio, recusandae nemo magnam, earum expedita neque nihil soluta? <br /> <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates. Ipsum voluptatibus ratione consectetur voluptate nemo omnis amet, sit eaque, magni vero tempora sequi reprehenderit. Soluta quaerat explicabo voluptates perspiciatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo rerum iste error aut inventore facere ex, quasi aliquid laudantium et delectus voluptates debitis dolorem deleniti non, omnis, accusantium fugit vel.<br /> <br />Exemplo: <br /> <br /> Quando enviado ... retorna ...</p>
        </div>
        <ActivityForm />
      </StyledQuestion>
      <StyledExercise>
        <FunctionBox />
        <ConsoleBox />
      </StyledExercise>
    </StyledExerciseContainer>
  );
}
