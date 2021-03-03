import styled from 'styled-components';

const StyledTests = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1em;
`;

const TestTitle = styled.div`
    display: flex;
    justify-content: flex-start;

    & > p {
        font-size: 0.9em;
        font-weight: bold;
        line-height: 1.4em;
    }

    & > p:last-child {
        color: ${({ state }) => state !== 'passed' ? '#FF9999' : '#A9EEBC'};
        margin-left: 0.5em;
    }
`;

const TestMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
        font-size: 0.9em;
        line-height: 1.4em;
    }
`;

export {
    StyledTests,
    TestTitle,
    TestMessage
}
;
