import styled from 'styled-components';

const styledHeader = styled.nav`
    width: 100vw;
    padding: 1em 1.7em;
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
    }

    .user {
        display: flex;
        align-items: center;
        cursor: pointer;
        .icon {
            margin-right: 0.5rem;
            font-size: 1.7rem;
        }
        .dropDown {
            position: fixed;
            top: 96px;
            right: 0;
            width: 8rem;
            height: 4.5rem;
            background: #FFFFFF;
            border-radius: 0px 0px 10px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            li {
                color: #262626;
                font-family: Roboto;
                font-size: 1.2rem;
                padding: 0 0 0.4rem 0;
                width: 80%;
                text-align: center;
            }
            li:first-child {
                border-bottom: 1px solid #D7D7D7;
            }
        }
    }

    @media (max-width: 800px) {
        justify-content: center;

        .logo {
            margin: 0;
        }
        .home, .courses, .perfil, .user{
            display: none;
        }
    }
    
`;

export default styledHeader;
