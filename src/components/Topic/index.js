import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { StyledTopic, Details } from './styles';

export default function Topic (props) {
    const [isOpen, setIsOpen] = useState(false);
    const { text , content } = props;

    return (
        <>
            <StyledTopic onClick={() => setIsOpen(!isOpen)}>
                <div className='title'>
                    {isOpen ? <IoIosArrowUp className='icon'/> : <IoIosArrowDown className='icon'/>}
                    <p>{text}</p>
                </div>
                <div className='content'>
                    <p> {content} </p>
                </div>
            </StyledTopic>
            <Details isOpen={isOpen}>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
                <li>teste</li>
            </Details>
        </>
    );
}

