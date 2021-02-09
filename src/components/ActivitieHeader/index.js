import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import StyledActivitieHeader from './styles';

export default function ActivitieHeader(){
    return (
      <StyledActivitieHeader>
        <div className="back">
          <IoIosArrowBack />
        </div>
        <div className='chapter-topic'>
          <p>Apresentação - Como usar</p>
          <IoIosArrowDown />
        </div>
      </StyledActivitieHeader>
    );
}
