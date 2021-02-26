import styled from 'styled-components';

const Container = styled.div`

  width: 100vw;
  min-height: 100vh;
  background: url('/assets/images/background_login.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  img {
    width: 18%;
  }

  h2 {
    margin-top: 0.7rem;
    font-family: Orienta;
    font-weight: normal;
    font-size: 2rem;
    color: #FFFFFF;
  }

  .loginBox {
    width: 100%;
    max-width: 425px;
    margin-top: 3rem;
    background-color: white;
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1.5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer {
      font-family: Roboto;
      font-weight: normal;
      font-size: 0.9rem;
      line-height: 25px;
      text-decoration-line: underline;
      color: #787878;
      outline: 0;
      border:0;
      background-color: white;
      cursor: pointer;
    }

    @media (max-width: 600px) {
      width: 90%;
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 600px) {

    img{
      width: 80%;
    }

    h2 {
      font-size: 1.6rem;
    }
      
  }
`;

export default Container;
