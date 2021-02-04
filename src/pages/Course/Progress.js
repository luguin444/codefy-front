import styled from "styled-components";

const Progress = styled.div`
    display: flex;
    justify-content: space-between;

    .avatar {
        background: #46A7D4;
        width: 3.5em;
        height: 3.5em;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        p {
            font-size: 1.35em;
            color: white;
        }
    }

    .progress {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 15px;
        padding: 0.3rem 0;
        
        p {
            font-size: 1rem;
            font-weight: 400;
        }

        @media (max-width: 680px) {
            flex-grow: 1;
        }
    }

    .progress-bar {
        background: #EAEAEA;
        border-radius: 0.7rem;
        display: flex;
        justify-content: flex-start;
    }

    .progress-value {
        min-width: fit-content;
        border-radius: 0.7rem;
        padding: 0.15rem 0.5rem;
        background: #76DF93;
        color: white;
        
        p {
            font-size: 0.87rem;
            width: fit-content;
        }
    }

    @media (max-width: 680px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

export default Progress;