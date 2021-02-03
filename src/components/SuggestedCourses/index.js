import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoursePreview from '../CoursePreview';

export default function SuggestedCourses(){
    const [suggestedCourses, setSuggestedCourses] = useState([]);
    useEffect(() => {
      axios.get(`${process.env.API_BASE_URL}/clients/courses`)
      .then( response  => {
        setSuggestedCourses(response.data);
      }).catch(() => {
        alert("erro");
      })
    }, []);
    console.log(suggestedCourses);
    return (
      <section className="container">
        <ul>
          { suggestedCourses.length === 0 ?
              ""
              :
              suggestedCourses.map(c => <CoursePreview key={c.id} course={c} />)
            }
        </ul>
      </section>
    );
}