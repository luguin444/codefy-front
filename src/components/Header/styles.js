import styled from 'styled-components';

const styledHeader = styled.nav`
    width: 100vw;
    padding: 1em 1.5em;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    z-index: 5;

    .container {
        display: flex;
        align-items: center;
    }

    li {
        font-size: 1.2em;
        margin: 0 1em 0 0;
        cursor: pointer;
    }

    .logo {
        font-family: 'Zilla Slab Highlight', cursive;
        font-size: 3em;
        letter-spacing: 0.05em;
        color: #333333;
    }

    .user {
        background: #46A7D4;
        width: 4em;
        height: 4em;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        p {
            font-size: 1.5em;
            color: white;
        }
    }

    @media (max-width: 800px) {
        justify-content: center;

        .logo {
            margin: 0;
        }
        
        .user, .home, .courses, .perfil{
            display: none;
        }
    }
    
`;

export default styledHeader;
