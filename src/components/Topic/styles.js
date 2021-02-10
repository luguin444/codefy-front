import styled from 'styled-components';

const StyledTopic =  styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1.2rem;
    border-bottom: 1px solid #E7E7E7;
    border-top: 1px solid #E7E7E7;
    cursor: pointer;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #656565;

        p {
            font-family: "Roboto", sans-serif;
            font-weight: bold;
            font-size: 1.4rem;
        }

        .icon {
            font-size: 1.9rem;
            margin-right: 1.2rem;
        }
    }

    .content {
        text-align: end;

        p {
            font-family: "Roboto", sans-serif;
            font-weight: normal;
            font-size: 1.23rem;
            color: #656565;
        }

        @media (max-width: 630px) {
            display: none;
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
