import styled from 'styled-components';

const StyledActivityForm = styled.form`
    width: 100%;
    max-width: 645px;
    margin: 1em 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .checkbox-container {
        display: flex;
        color: #9D9D9D;
        justify-content: center;
        align-items: center;

        .checkbox {
            width: 1em;
            height: 1em;
            border: 1px solid #9D9D9D;
            border-radius: 2px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .check {
            color: #76DF93;
        }

        .checked {
            border: 1px solid  #76DF93;
        }

        p {
            margin: 0 0 0 0.5em;
        }
    }

    button {
        outline: none;
        border:none;
        background: #46A7D4;
        border-radius: 0.5em;
        padding: 0.8em 2.5em;
        color: #fff;
        font-weight: bold;
        font-size: 0.9em;
        cursor: pointer;
    }
`;

export default StyledActivityForm;
