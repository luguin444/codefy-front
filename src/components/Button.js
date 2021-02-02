import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 3rem;
    background: ${ (props) => (props.disabled ? "red" : "#46A7D4") };
    border-radius: 0.5rem;
    outline: 0;
    border: 0;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: #FFFFFF;
`;

export default Button;