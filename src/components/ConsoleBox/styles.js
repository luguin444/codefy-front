import styled from 'styled-components';

const StyledConsoleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    height: 45%;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.6em;
        width: 100%;

        p {
            font-size: 0.7rem;
            color: #FFFFFF;
            margin-right: 10px;
        }

        .test {
            position: relative;
            height: 100%;
            background: rgba(150, 150, 150, 0.5);
            border-radius: 0.5em;
            outline: 0;
            border: 0;
            padding: 0.36em 2em 0.36em 1.6em;
            color: white;
            cursor: pointer;
        }

        .function-icon {
            position: absolute;
            top: 0.38em;
            right: 1.3em;
            font-size: 0.78rem;
        }
    }
`;

const StyledDisplayTests = styled.div`
    overflow-y: auto;
    background: #202020;
    flex-grow: 1;
    width: 100%;
    padding: 1.5em 0 0 1.5em;

    & > p {
        font-size: 0.9em;
    }

    & > ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: auto;
    }
`;

export {
    StyledConsoleBox,
    StyledDisplayTests
};
