import styled from 'styled-components';

const StyledActivity = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #3D3D3D;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    .next-container{
        width: 645px;
        margin: 1em 0 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .checkbox-container{
            display: flex;
            color: #9D9D9D;
            justify-content: center;
            align-items: center;
            .checkbox{
                width: 1em;
                height: 1em;
                border: 1px solid #9D9D9D;
                border-radius: 2px;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .check {
                color: #76DF93;
            }
            .checked{
                border: 1px solid  #76DF93;
            }
            p{
                margin: 0 0 0 0.5em;
            }
        }

        button{
            outline: none;
            border:none;
            width: 18%;
            background: #46A7D4;
            border-radius: 0.5em;
            padding: 0.8em 0;
            color: #fff;
            font-weight: bold;
            font-size: 0.9em;
            cursor: pointer;
        }
    }
`;

export default StyledActivity;
