import styled from 'styled-components';

const StyledActivitieProgress = styled.section`
    width: 100%;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    padding: 2em 0;
    border-bottom: 1px solid #717171;

    .progress-container{
        display: flex;
        .each-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 -10px;

            p{
                min-width: 53px;
                text-align: center;
                font-weight: bold;
                margin-top: 10px;
                font-size: 0.8em;
            }
        }

        .bar{
            width: 6vw;
            height: 2px;
            margin: 5.5px 0 0 0;
            background: white;
        }
    }
`;

export default StyledActivitieProgress;