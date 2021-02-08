import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import OutterContainer from "./OutterContainer";
import BackgroundBanner from "./BackgroundBanner";
import MainContainer from "./MainContainer";
import Presentation from "./Presentarion";
import CourseStatus from "./CourseStatus";
import Progress from "./Progress";
import CourseButton from "./CourseButton";

export default function Course() {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:3000/clients/courses/${courseId}`)
        .then(resp => {
            setCourse(resp.data);
        });
    },[]);
    
    function startCourse() {
        if (loading) return;

        setLoading(true);
        history.push('/course/:courseId/chapter/:chapterId/topic/:topicId/activity/:activityId');
        setLoading(false);
    }

    return(
        <OutterContainer>
            <BackgroundBanner />
            <MainContainer>
                <Presentation>
                    <h1>{course.name}</h1>
                    <p>{course.description}</p>
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
                    <CourseButton disabled={loading} onClick={startCourse}>
                        <p>Iniciar curso {`>>`}</p>
                    </CourseButton>
                </CourseStatus>
            </MainContainer>
        </OutterContainer>  
    )
}