import styled from 'styled-components';

const StyledActivityProgress = styled.section`
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 4.813em 0 1em 0;
    background: #202020;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

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

        .grey{
            color: #B3B3B3;
        }

        .now{
            color: #fff;
        }

        .bar{
            width: 6vw;
            height: 2px;
            margin: 5.5px 0 0 0;
            background:  #B3B3B3;
        }

        span{
            display: flex;
            svg{
                cursor: pointer;
            }
        }

        .done {
            color: #76DF93;
        }
        
        .bar-done {
            width: 6vw;
            height: 2px;
            margin: 5.5px 0 0 0;
            background: #76DF93;
        }
    }
`;

export default StyledActivityProgress;
