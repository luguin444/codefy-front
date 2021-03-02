/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaCircle } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import StyledActivityHeader from './styles';
import UseOutsideClick from '../../hooks/useOutsideClick';

export default function ActivityHeader({ chapter, topic, chapters }){
  const history = useHistory();
  const { courseId } = useParams();
  const [open, setOpen] = useState(false);

  function handleClick(chapterId, topicId, activityType, activityId){
    history.push(`/course/${courseId}/chapter/${chapterId}/topic/${topicId}/${activityType}/${activityId}`);
  }

  function changeActivitie(chapterId, topicId, theoryId) {
    setOpen(false);
    handleClick(chapterId, topicId, 'theory', theoryId);
  }

  return (
    <StyledActivityHeader>
      <div className="back" onClick={() => history.push(`/course/${courseId}`)} onKeyPress={() => history.push(`/course/${courseId}`)}>
        <IoIosArrowBack />
      </div>
      <div className='chapter-topic'>
        <p>{chapter} - {topic}</p>
        {
          open ? <IoIosArrowUp onClick={() => setOpen(false)} /> : <IoIosArrowDown onClick={() => setOpen(true)} />
        }
        {
          open &&
          <UseOutsideClick onClickOutside={() => setOpen(false)}>
            <ul className="navigation">
              {
                chapters.map(c => {
                  return (
                    <li key={c.id}>
                      <p className="chapter">{c.name}</p>
                      {
                        c.topics.map(t => {
                          return (
                            <div className="topic-container" 
                              key={t.id} 
                              onClick={() => changeActivitie(c.id, t.id, t.theory.id)}
                              onKeyPress={() => changeActivitie(c.id, t.id, t.theory.id)}
                            >
                              <FaCircle />
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
          </UseOutsideClick>
        }
      </div>
    </StyledActivityHeader>
  );
}
