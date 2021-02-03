import React, { useState } from 'react';
import SuggestedCourses from '../../components/SuggestedCourses';
import StyledHome from './styledHome';

export default function Home(){
    // eslint-disable-next-line no-unused-vars
    const [activeCourses, setActiveCourser] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [suggestedCourses, setSuggestedCourses] = useState([{
        id: 1,
        name: "JavaScript do zero!",
        description: "Aprenda JavaScript do zero ao avançado, com muita prática!",
        image: "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
    },{
        id: 2,
        name: "JavaScript do zero!",
        description: "Aprenda JavaScript do zero ao avançado, com muita prática!",
        image: "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
    },{
        id: 3,
        name: "JavaScript do zero!",
        description: "Aprenda JavaScript do zero ao avançado, com muita prática!",
        image: "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
    },{
        id: 4,
        name: "JavaScript do zero!",
        description: "Aprenda JavaScript do zero ao avançado, com muita prática!",
        image: "https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg"
    }]);

    return (
        <StyledHome>
            <div className="banner">
                <p>Olá, Pedro!</p>
                <b>{activeCourses.length === 0 ? "Você não começou nenhum curso ainda. Experimente um! :)" : "Continue seu curso atual abaixo! :)"}</b>
            </div>
            <SuggestedCourses courses={suggestedCourses} />
        </StyledHome>
    );
}