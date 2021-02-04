import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import CoursePreview from '../CoursePreview';

export default function SuggestedCourses(){
    const [suggestedCourses, setSuggestedCourses] = useState([]);
    const { token } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
      axios.get(`${process.env.API_BASE_URL}/clients/courses`, { headers: { 'X-Access-Token': token } })
      .then(response  => {
        setSuggestedCourses(response.data);
      }).catch((error) => {
        if (error.response.status === 403){
          console.log(history);
          history.push('/');
        } else {
          alert('erro');
        }
      });
    }, []);
    
    return (
      <section className="container">
        <ul>
          { 
            suggestedCourses.length > 0 
            && 
            suggestedCourses.map(c => <CoursePreview course={c} key={c.id} />)
          }
        </ul>
      </section>
    );
}
