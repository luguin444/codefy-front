import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';

import { StyledChapter, Details } from './styles';

export default function Chapter (props) {
    const [isOpen, setIsOpen] = useState(false);
    const { text , content, topics } = props;

    return (
      <>
        <StyledChapter onClick={() => setIsOpen(!isOpen)}>
          <div className='title'>
            {isOpen ? <IoIosArrowUp className='icon'/> : <IoIosArrowDown className='icon'/>}
            <p>{text}</p>
          </div>
          <div className='content'>
            <p>{content}</p>
          </div>
        </StyledChapter>
        <Details isOpen={isOpen}>
          {
            topics && topics.map(t => 
              <div key={t.id} className="topic-container">
                <span>
                  <div>{t.done ? <AiFillCheckCircle className="check" /> : <FaCircle />}</div>
                  <li>{t.name}</li>
                </span>
                <p>Visualizar</p>
              </div>)
          }
        </Details>
      </>
    );
}

