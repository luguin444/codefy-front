/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import StyledActivityHeader from './styles';

export default function ActivityHeader({ chapter, topic }){
  const history = useHistory();
  return (
    <StyledActivityHeader>
      <div className="back" onClick={() => history.push('/home')} onKeyPress={() => history.push('/home')}>
        <IoIosArrowBack />
      </div>
      <div className='chapter-topic'>
        <p>{chapter} - {topic}</p>
        <IoIosArrowDown />
      </div>
    </StyledActivityHeader>
  );
}
