import styled from 'styled-components';

const StyledFunctionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    height: 55%;
    overflow-y: hidden;

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

        .advancement {
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

    & > div {
        background: #202020;
        flex-grow: 1;
        width: 100%;
    }
`;
export default StyledFunctionBox;
