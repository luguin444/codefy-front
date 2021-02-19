/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import { FaAngleLeft } from 'react-icons/fa';
import { 
    OutterContainer,
    BackgroundBanner,
    BackButton,
    MainContainer,
    Presentation,
    CourseStatus,
    Progress,
    CourseButton,
    Accordeon,
    ChaptersContainer
} from './styles';
import Chapter from '../../components/Chapter';
import CourseContext from '../../contexts/CourseContext';

export default function Course() {
  const { courseId } = useParams();
  const { setCourseContext } = useContext(CourseContext);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});
  const history = useHistory();
  const name = localStorage.getItem('name');
  const token = localStorage.getItem('token');

    useEffect(() => {
      axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, { headers: { 'X-Access-Token': token } })
      .then(resp => {
        setCourse(resp.data);
      });
    },[]);

    function startCourse() {
      if (loading) return;
  
      setLoading(true);
      axios.post(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, {}, { headers: { 'X-Access-Token': token } })
      .then(() => {
        setCourseContext(course);
        history.push(`/courses/${courseId}/chapter/${course.chapters[0].id}/topic/${course.chapters[0].topics[0].id}/theory/${course.chapters[0].topics[0].theories[0].id}`);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    }
    
    return (
      <OutterContainer>
        <BackgroundBanner />
        <BackButton onClick={() => history.push('/home')} onKeyPress={() => history.push('/home')}> 
          <FaAngleLeft />
        </BackButton>
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
            <ChaptersContainer>
              {
                course.chapters && 
                course.chapters.map(c => <Chapter text={c.name} content="x aulas  •  y exercícios" topics={c.topics} key={c.id} />)
              }
            </ChaptersContainer>
          </Accordeon>
        </MainContainer>
      </OutterContainer>  
    );
}
