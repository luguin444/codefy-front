import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import StyledActivityHeader from './styles';

export default function ActivityHeader(){
    return (
      <StyledActivityHeader>
        <div className="back">
          <IoIosArrowBack />
        </div>
        <div className='chapter-topic'>
          <p>Apresentação - Como usar</p>
          <IoIosArrowDown />
        </div>
      </StyledActivityHeader>
    );
}
