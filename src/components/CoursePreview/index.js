import React from 'react';
import StyledCoursePreview from './styles';

export default function CoursePreview({ course }){
    return (
      <StyledCoursePreview>
        <img src={course.image} alt={course.name} />
        <div className="infos-container">
          <p><b>{course.name}</b></p>
          <p>{course.description}</p>
        </div>
      </StyledCoursePreview>
    );
}
