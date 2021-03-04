/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaCircle } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useHistory, useParams } from 'react-router-dom';
import StyledActivityHeader from './styles';
import CourseContext from '../../contexts/CourseContext';

export default function ActivityHeader({ chapter, topic, activities, chapters }){
  const history = useHistory();
  const { setActivities } = useContext(CourseContext);
  const { courseId } = useParams();
  const [open, setOpen] = useState(false);

  function handleClick(chapterId, topicId, activityType, activityId){
    history.push(`/course/${courseId}/chapter/${chapterId}/topic/${topicId}/${activityType}/${activityId}`);
  }

  function checkDoneTopic(topicId, numberOfActivities){
    const doneActivitiesTopic = activities.filter(a => a.topicId === topicId && a.done);
    return doneActivitiesTopic.length === numberOfActivities;
  }

  return (
    <StyledActivityHeader>
      <div className="back" onClick={() => {history.push(`/course/${courseId}`); setActivities(null);}} onKeyPress={() => {history.push(`/course/${courseId}`); setActivities(null);}}>
        <IoIosArrowBack />
      </div>
      <div className='chapter-topic'>
        <p>{chapter} - {topic}</p>
        {
          open ? <IoIosArrowUp onClick={() => setOpen(false)} /> : <IoIosArrowDown onClick={() => setOpen(true)} />
        }
        {
          open &&
          <ul className="navigation">
            {
            chapters.map(c => {
              return (
                <li key={c.id}>
                  <p className="chapter">{c.name}</p>
                  {
                    c.topics.map(t => {
                      const doneTopic = checkDoneTopic(t.id, t.exercises.length + 1);
                      return (
                        <div className="topic-container" 
                        key={t.id} 
                        onClick={() => handleClick(c.id, t.id, 'theory', t.theory.id)}
                        onKeyPress={() => handleClick(c.id, t.id, 'theory', t.theory.id)}
                        >
                          {doneTopic ? <AiFillCheckCircle className="done" /> : <FaCircle />}
                          <p className="topic" >{t.name}</p>
                        </div>
                      );
                    })
                  }
                </li>
              
              );
            })
          }
          </ul>
        }
      </div>
    </StyledActivityHeader>
  );
}
