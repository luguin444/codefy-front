import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseContext from "../../contexts/CourseContext";
import OutterContainer from "./OutterContainer";
import BackgroundBanner from "./BackgroundBanner";
import MainContainer from "./MainContainer";
import Presentation from "./Presentarion";
import CourseStatus from "./CourseStatus";
import Progress from "./Progress";
import CourseButton from "./CourseButton";

export default function Course() {
    const { courses } = useContext(CourseContext);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
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
                <Presentation>
                    <h1>{courses.map(c => c.id === parseInt(id) ? c.name : '')}</h1>
                    <p>{courses.map(c => c.id === parseInt(id) ? c.description : '')}</p>
                </Presentation>
                <CourseStatus>
                    <Progress>
                        <div className="avatar">
                            <p>US</p>
                        </div>
                        <div className="progress">
                            <p>Você não iniciou esse curso ainda</p>
                            <div className="progress-bar">
                                <div className="progress-value">
                                    <p>0%</p>
                                </div>
                            </div>
                        </div>
                    </Progress>
                    <CourseButton disabled={loading}>
                        <p>Iniciar curso {`>>`}</p>
                    </CourseButton>
                </CourseStatus>
            </MainContainer>
        </OutterContainer>  
    )
}