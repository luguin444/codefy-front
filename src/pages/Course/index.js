import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import { 
  OutterContainer,
  BackgroundBanner,
  MainContainer,
  Presentation,
  CourseStatus,
  Progress,
  CourseButton,
  Accordeon,
  TopicsContainer
} from './styles';
import Topic from '../../components/Topic';

export default function Course() {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});
  const history = useHistory();
  const name = localStorage.getItem('name');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}`)
    .then(resp => {
      setCourse(resp.data);
    });
  },[]);
  
  function startCourse() {
    if (loading) return;

    setLoading(true);
    axios.post(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, { headers: { 'X-Access-Token': token } })
    .then(() => {
      history.push('/activities');
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <OutterContainer>
      <BackgroundBanner />
      <MainContainer>
        <Presentation>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
        </Presentation>
        <CourseStatus>
          <Progress>
            <Avatar name={name} round={true} size="4em" maxInitials={2} />
            <div className="progress">
              <p>Você não iniciou esse curso ainda</p>
              <div className="progress-bar">
                <div className="progress-value">
                  <p>0%</p>
                </div>
              </div>
            </div>
          </Progress>
          <CourseButton disabled={loading} onClick={startCourse}>
            <p>Iniciar curso {'>>'}</p>
          </CourseButton>
        </CourseStatus>
        <Accordeon>
          <h2>Ementa</h2>
          <TopicsContainer>
            <Topic text="Apresentação" content="2 aulas • 5 exercicios" />
            <Topic text="Preparando o ambiente" content="2 aulas • 5 exercicios" />
            <Topic text="Introdução a JS" content="2 aulas • 5 exercicios"/>
            <Topic text="Váriaveis" content="2 aulas • 5 exercicios"/>
            <Topic text="Condicionais" content="2 aulas • 5 exercicios"/>
          </TopicsContainer>
        </Accordeon>
      </MainContainer>
    </OutterContainer>  
  );
}
