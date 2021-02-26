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
    width: 45vw;
    color: #FFF;


    h1 {
        font-weight: bold;
        font-size: 2rem;
    }

    & > div {
        flex-grow: 1;
        overflow-y: scroll;
        margin-top: 1.8rem;

        & > p {
            font-size: 0.8rem;
        }
    }
`;

const StyledExercise = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55vw;
`;

export {
    StyledExerciseContainer,
    StyledQuestion,
    StyledExercise
};
