import styled from 'styled-components';

const StyledActivityHeader = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #292929;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    padding: 1em;

    .back{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 40px;
        width: 40px;
        top: 10px;
        left: 20px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 6px;
        cursor: pointer;
        z-index: 1;
        svg{
            font-size: 1.2em;
            font-weight: bold;
            color: #fff;
        }
    }

    .chapter-topic{
        position: relative;
        display: flex;
        color: #D6D6D6;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 1.3em;
        line-height: 29px;

        svg{
            margin: 0 0 0 0.4em;
            cursor: pointer;
            font-size: 1.325em;
        }
    }

    .navigation{
        width: 378px;
        height: 400px;
        overflow-y: scroll;
        position: fixed;
        top: 60px;
        left: calc(50vw - 189px);
        background: #303030;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
        z-index: 500;

        ::-webkit-scrollbar-track {
            background-color: transparent;
            margin: 0.5em;
        }
        ::-webkit-scrollbar {
            width: 10px;
            background: transparent;
            padding: 0.5em;
        }
        ::-webkit-scrollbar-thumb {
            background: #5B5B5B;
            margin: 0 5px 0 0;
            border-radius: 1em;
        }
    }

    .chapter{
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
    }

    .topic{
        font-weight: 300;
        font-size: 16px;
        line-height: 22px;
    }

    .topic-container{
        display: flex;
        align-items: center;
        margin: 0.5em 0;
        padding: 0 0 0 0.5em;
        svg{
            font-size: 0.8em;
            margin: 0 0.8em 0 0;
        }
        cursor: pointer;
    }
`;

export default StyledActivityHeader;
