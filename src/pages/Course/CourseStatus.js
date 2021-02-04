import styled from "styled-components";

const CourseStatus = styled.div`
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10vh 3.8vw 10vh 5.6vw;

    @media (max-width: 680px) {
        flex-direction: column;
        padding: 5vh 4vw 3vh 6vw;
    }
`;

export default CourseStatus;