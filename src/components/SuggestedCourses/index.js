import React from 'react';
import CoursePreview from '../CoursePreview';

export default function SuggestedCourses({courses}){
    return (
        <section className="container">
            <ul>
                {
                    courses.map(c => <CoursePreview key={c.id} course={c} />)
                }
            </ul>
        </section>
    );
}