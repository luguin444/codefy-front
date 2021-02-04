import React, { createContext, useState } from "react";

const CourseContext = createContext();
export default CourseContext;

export function CourseProvider({ children }) {
    const courses = [{
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
    }];

    return (
        <CourseContext.Provider value={{ courses }}>
            {children}
        </CourseContext.Provider>
    );
}