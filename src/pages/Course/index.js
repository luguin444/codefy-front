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
  const { activities, setCourseContext } = useContext(CourseContext);
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

  function verifyUserProgress() {
    if (loading) return;
    setLoading(true);

    if (course.started) {
      axios.get(`${process.env.API_BASE_URL}/clients/courses/${courseId}/activities`, { headers: { 'X-Access-Token': token } })
      .then((resp) => {
        setCourseContext(resp.data);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      });
    } else {
      axios.post(`${process.env.API_BASE_URL}/clients/courses/${courseId}`, {}, { headers: { 'X-Access-Token': token } })
      .then((response) => {
        history.push(`/course/${courseId}/chapter/${response.data.chapterId}/topic/${response.data.topicId}/theory/${response.data.theoryId}`);
      }).catch(err => {
        console.log(err);
        setLoading(false);
      });
    }
  }

  useEffect(() => {
    let calling = true;

    if (activities && calling) {
      let nextIndex = 0;

      for (let i = activities.length - 1; i >= 0; i--) {
        if (activities[i].done) {
          nextIndex = i + 1;
        }
      }

      if (nextIndex < activities.length) {
        history.push(`/course/${courseId}/chapter/${activities[nextIndex].chapterId}/topic/${activities[nextIndex].topicId}/${activities[nextIndex].type}/${activities[nextIndex].id}`);
      } else {
        history.push(`/course/${courseId}/chapter/${activities[activities.length - 1].chapterId}/topic/${activities[activities.length - 1].topicId}/${activities[activities.length - 1].type}/${activities[activities.length - 1].id}`);
      }  
    }

    return () => (calling = false);
  },[activities]);
  
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
          <Progress progress={course.progress}>
            <Avatar name={name} round={true} size="4em" maxInitials={2} />
            <div className="progress">
              <p>Você não iniciou esse curso ainda</p>
              <div className="progress-bar">
                <div className="progress-value">
                  <p>{course.progress ? `${course.progress}` : '0'}%</p>
                </div>
              </div>
            </div>
          </Progress>
          <CourseButton disabled={loading} onClick={verifyUserProgress}>
            <p>{course.started ? 'Continuar curso >>' : 'Iniciar curso >>'}</p>
          </CourseButton>
        </CourseStatus>
        <Accordeon>
          <h2>Ementa</h2>
          <ChaptersContainer>
            {
              course.chapters && 
              course.chapters.map((c) => <Chapter 
              text={c.name} 
              content={`${c.theoryCount} aulas  •  ${c.exerciseCount} exercícios`} 
              topics={c.topics} 
              courseId={course.id}
              chapterId={c.id}
              key={c.id} />)
            }
          </ChaptersContainer>
        </Accordeon>
      </MainContainer>
    </OutterContainer>  
  );
}
