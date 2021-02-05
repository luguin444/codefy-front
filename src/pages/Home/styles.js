import styled from 'styled-components';

const styledHome = styled.div`
    width: 100%;
    margin: 100px 0 0 0;
    font-family: 'Roboto', sans-serif;

    .banner{
        background: #46A7D4;
        font-size: 1.2em;
        color: #FFFFFF;
        padding: 1em 1.5em;
    }

    .container{
        width: 90%;
        margin: 0 auto;
        
        ul{
            margin: 3em 0 0 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
    }

    @media (max-width: 800px) {
        margin: 85px 0 0 0;
    }
`;

export default styledHome;
