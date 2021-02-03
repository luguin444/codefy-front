import styled from 'styled-components';

const StyledCoursePreview = styled.li`
    width: 20%;
    min-width: 190px;
    max-width: 240px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin: 0 0 2em 0;
    font-family: 'Roboto', sans-serif;
    img{
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    p{
        word-wrap: break-word;
        text-align: justify;
        margin: 0 0 1em 0;
    }

    .infos-container {
        padding: 1em 1.5em 0.5em 1.5em;
    }

    @media (max-width: 800px) {
        p{
            font-size: 14px;
        }
    }
    
`;

export default StyledCoursePreview;