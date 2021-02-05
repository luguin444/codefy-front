import React from 'react';
import { Link } from 'react-router-dom';
import StyledCoursePreview from './styles';

export default function CoursePreview({ course }){
    return (
      <StyledCoursePreview>
        <Link to={`curso/${course.id}`}>
          <img src={course.image} alt={course.name} />
        </Link>
        <Link to={`curso/${course.id}`}>
          <div className="infos-container">
            <p><b>{course.name}</b></p>
            <p>{course.description}</p>
          </div>
        </Link>
      </StyledCoursePreview>
    );
}