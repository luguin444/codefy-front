import styled from 'styled-components';

const StyledCoursePreview = styled.li`
    width: 267px;
    height: 355px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: 0 2em 2em 2em;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    
    img{
        width: 100%;
        height: 48%;
        border-radius: 15px 15px 0 0;
    }

    p{
        word-wrap: break-word;
        text-align: justify;
        margin: 0 0 1em 0;
    }

    .infos-container {
        padding: 1em 1.5em 0.5em 1.5em;
    }

    .description{
        color: #777;
        line-height: 1.375em;
        font-size: 1.2em;
    }

    .courseName{
        font-size: 1.2em;
    }

    @media (max-width: 800px) {
        margin: 0 0 2em 0;
        p{
            font-size: 14px;
        }
    }
    
`;

export default StyledCoursePreview;
