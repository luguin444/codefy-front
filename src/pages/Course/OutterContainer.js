import styled from "styled-components";

const OutterContainer = styled.div`
    position: relative;
    left: 0;
    top: 96px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        top: 80px;
    }
`;

export default OutterContainer;