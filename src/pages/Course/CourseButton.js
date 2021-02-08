import styled from 'styled-components';

const CourseButton = styled.button`
    height: 3rem;
    background: ${ (props) => (props.disabled ? "#a6d9f1" : "#46A7D4") };
    border-radius: 0.5rem;
    outline: 0;
    border: 0;
    padding: 1rem 1.5rem;
    font-weight: bold;
    font-size: 0.9rem;
    color: #FFFFFF;
    cursor: pointer;
`;

export default CourseButton;