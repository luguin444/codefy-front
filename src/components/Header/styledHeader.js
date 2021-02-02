import styled from 'styled-components';

const styledHeader = styled.nav`
    width: 100%;
    padding: 1em 1.5em;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;

    .container{
        display: flex;
        align-items: center;
    }

    li{
        font-size: 1.2em;
        margin: 0 1em 0 0;
    }
    .logo{
        font-family: 'Zilla Slab Highlight', cursive;
        font-size: 3em;
        line-height: 4px;
        letter-spacing: 0.05em;
        color: #333333;
    }

    .user{
        background: #46A7D4;
        width: 4em;
        height: 4em;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            font-size: 1.5em;
            color: white;
        }
    }
    
`;

export default styledHeader;