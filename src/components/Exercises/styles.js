import styled from 'styled-components';

const StyledExerciseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`;

const StyledQuestion = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2.5em;
    padding: 0 1.2em 1.2em 2.2em;
    width: 45%;
    color: #FFF;

    h1 {
        font-weight: bold;
        font-size: 1.8rem;
    }

    & > div {
        flex-grow: 1;
        overflow-y: scroll;
        margin-top: 1.8rem;

        ::-webkit-scrollbar-track {
            background-color: transparent;
            margin: 0.5em;
        }

        ::-webkit-scrollbar {
            width: 10px;
            background: transparent;
            padding: 0.5em;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #5B5B5B;
            margin: 0 5px 0 0;
            border-radius: 1em;
        }

        & > p {
            font-size: 0.8rem;
        }
    }
`;

const StyledExercise = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
`;

export {
    StyledExerciseContainer,
    StyledQuestion,
    StyledExercise
};
