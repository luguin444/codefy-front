import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from "../../contexts/CourseContext";
import OutterContainer from "./OutterContainer";
import BackgroundBanner from "./BackgroundBanner";
import MainContainer from "./MainContainer";

export default function Course() {
    const { courses } = useContext(CourseContext);
    const { id } = useParams();
    // const [course, setCourse] = useState({});

    // useEffect(() => {
    //     axios.get(`http://localhost:3000/courses/${id}`)
    //     .then(resp => {
    //         setCourse(resp.data);
    //     });
    // },[]);

    return(
        <OutterContainer>
            <BackgroundBanner />
            <MainContainer>
                <div className='presentation'>
                    <h1>{courses.map(c => c.id === parseInt(id) ? c.name : '')}</h1>
                    <p>{courses.map(c => c.id === parseInt(id) ? c.description : '')}</p>
                </div>
                <div className='course-status'>

                </div>
            </MainContainer>
        </OutterContainer>  
    )
}