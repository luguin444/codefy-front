import React from 'react';
import { BsCircleFill } from 'react-icons/bs';
import StyledActivitieProgress from './styles';

export default function ActivitieProgress(){
    return (
      <StyledActivitieProgress>
        <div className="progress-container">
          <div className="each-content">
            <BsCircleFill />
            <p>Teoria</p>
          </div>
          <div className="bar"></div>
          <div className="each-content">
            <BsCircleFill />
            <p>Exercício</p>
          </div>
          <div className="bar"></div>
          <div className="each-content">
            <BsCircleFill />
            <p>Exercício</p>
          </div>
          <div className="bar"></div>
          <div className="each-content">
            <BsCircleFill />
            <p>Exercício</p>
          </div>
          <div className="bar"></div>
          <div className="each-content">
            <BsCircleFill />
            <p>Exercício</p>
          </div>
        </div>
      </StyledActivitieProgress>
    );
}
