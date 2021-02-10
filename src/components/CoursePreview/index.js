import React from 'react';
import { Link } from 'react-router-dom';
import StyledCoursePreview from './styles';

export default function CoursePreview({ course }){
    return (
      <StyledCoursePreview>
        <Link to={`course/${course.id}`}>
          <img src={course.image} alt={course.name} />
        </Link>
        <Link to={`course/${course.id}`}>
          <div className="infos-container">
            <p className="courseName"><b>{course.name}</b></p>
            <p className="description">{course.description}</p>
          </div>
        </Link>
      </StyledCoursePreview>
    );
}
