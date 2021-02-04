import styled from "styled-components";

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 2;
    padding: 3.6% 6%;
    width: 100vw;
    font-family: 'Roboto', sans-serif;

    .presentation {
        width: 100%;
        text-align: center;
        margin-bottom: 45px;

        h1 {
            margin-bottom: 15px;
            font-size: 30px;
            font-weight: 700;
        }

        p {
            font-size: 18px;
            font-weight: 400;
            color: #383838;
        }
    }

    .course-status {
        width: 100%;
        height: 200px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        display: flex;
        justify-content: space-between;
    }
`;

export default MainContainer;