import styled from 'styled-components';

const StyledTopic =  styled.section`
width: 100%;
height: 6rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;
border-bottom: 1px solid #E7E7E7;
border-top: 1px solid #E7E7E7;

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: Roboto;
        font-weight: bold;
        font-size: 1.7rem;
        line-height: 2rem;
        color: #656565;
        margin-left: 0.5rem;
    }
    .icon {
        font-size: 2rem;
    }
}

.content {
    p {
        font-family: Roboto;
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 2rem;
        color: #656565;
    }
}
`;

const Details = styled.ul`
display: ${(props) => props.isOpen ? 'initial' : 'none'};
list-style: circle;
padding: 1rem;

li {
    margin-left: 5rem;
}

li :last-child {
    border-bottom: 1px solid #E7E7E7;
}
`;

export {
    StyledTopic,
     Details,
};
