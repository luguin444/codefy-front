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
        letter-spacing: 0.05em;
        color: #333333;
    }

    @media (max-width: 800px) {
        justify-content: center;

        .logo {
            margin: 0;
        }
        .home, .courses, .perfil{
            display: none;
        }
    }
    
`;

export default styledHeader;
