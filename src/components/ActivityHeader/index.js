import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import StyledActivityHeader from './styles';

export default function ActivityHeader({ chapter, topic }){
    return (
      <StyledActivityHeader>
        <div className="back">
          <IoIosArrowBack />
        </div>
        <div className='chapter-topic'>
          <p>{chapter} - {topic}</p>
          <IoIosArrowDown />
        </div>
      </StyledActivityHeader>
    );
}
