import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackgroundBanner = styled.div`
    width: 100vw;
    height: 339px;
    left: 0px;
    top: 96px;
    background: #19AACA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1.5rem;

    h2 {
      margin-top: 0.8rem; 
      font-family: Roboto;
      font-weight: bold;
      font-size: 44px;
      line-height: 52px;
      color: #fff;
    }
`;

const ContentBox = styled.div`
  max-width: 995px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-top: -4rem;
  padding: 3rem;
`;

const Form = styled.form`
  display: flex;
`;

const ContainerData = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .image {
    margin-right: 2.8rem;
  }

  input {
    background: #FFFFFF;
    border: 1px solid #B4B4B4;
    border-radius: 6px;
    width: 601px;
    height: 59px;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    padding-left: 0.8rem;
    font-size: 1.2rem;
    color: #9F9F9F;
    font-family: Roboto;
  }
  
  .small {
    width: 300px;
  }

  p {
    color: #9F9F9F;
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`;

const ContainerButton = styled.div`
  display: flex;

  button {
    outline: 0;
    border: 0;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2rem;
    height: 35px;

    img {
      width: 2rem;
    }
  }

  .password {
    color: #19AACA;
    background: #FFFFFF;
    border: 2px solid #46A7D4;
    border-radius: 10px;
    width: 10.2rem;
    margin-right: 1.8rem;
  }

  .save {
    background: #46A7D4;
    width: 8rem;
    border-radius: 10px;
    color: #FFFFFF;
  }
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
`;

export {
    BackgroundBanner,
    ContentBox,
    PageContainer,
    ContainerData,
    Form,
    ContainerButton,
    Error,
};

