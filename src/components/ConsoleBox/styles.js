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

        & > div {
            height: 100%;
            background: rgba(150, 150, 150, 0.5);
            border-radius: 0.5em;
            padding: 0.36em 1.6em;
            color: white;
            font-size: 0.7rem;
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }
    }

    & > div {
        background: #202020;
        flex-grow: 1;
        width: 100%;
        padding: 1.5em 0 0 1.5em;

        & > p {
            font-size: 0.9em;
        }
    }
`;

export default StyledConsoleBox;
