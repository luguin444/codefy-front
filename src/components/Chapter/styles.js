import styled from 'styled-components';

const StyledChapter =  styled.article`
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
    display: ${(props) => props.isOpen ? 'block' : 'none'}; 
    padding: 2em;
    background: #F8F8F8;
    
    .topic-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 1.5em 0;
        color: #656565;
        font-family: 'Roboto', sans-serif;
        font-size: 1.1em;
        .view{
            color: #656565;
        }
    }

    .topic-container:last-child{
        display: flex;
        align-items: center;
        margin: 0;
    }

    span{
        display: flex;
    }

    svg{
        color: #CFCFCF;
    }

    .check{
        color: #76DF93;
    }

    li {
        font-size: 1.2em;
        margin-left: 1.5rem;
    }

    li :last-child {
        border-bottom: 1px solid #E7E7E7;
    }

    @media (max-width: 360px) {
        padding: 20px;
    }
`;

export {
    StyledChapter,
    Details,
};
