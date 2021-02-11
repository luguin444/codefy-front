import styled from 'styled-components';

const StyledActivityHeader = styled.nav`
    width: 100vw;
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
        svg{
            font-size: 1.2em;
            font-weight: bold;
            color: #fff;
        }
    }

    .chapter-topic{
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

`;

export default StyledActivityHeader;