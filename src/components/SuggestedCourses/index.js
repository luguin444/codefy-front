import React from 'react';
import CoursePreview from '../CoursePreview';

export default function SuggestedCourses({courses}){
    return (
        <section className="container">
            <ul>
                {
                    courses.map(c => <CoursePreview course={c} />)
                }
            </ul>
        </section>
    )
}