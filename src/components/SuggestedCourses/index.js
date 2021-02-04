import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import CoursePreview from '../CoursePreview';

export default function SuggestedCourses(){
    const [suggestedCourses, setSuggestedCourses] = useState([]);
    const { token } = useContext(UserContext);
    useEffect(() => {
      axios.get(`${process.env.API_BASE_URL}/clients/courses`, { headers: { 'X-Access-Token': token } })
      .then(response  => {
        setSuggestedCourses(response.data);
      }).catch(() => {
        alert('erro');
      });
    }, []);
    
    return (
      <section className="container">
        <ul>
          { suggestedCourses.length === 0 ?
              ''
              :
              suggestedCourses.map(c => <CoursePreview key={c.id} course={c} />)
            }
        </ul>
      </section>
    );
}
