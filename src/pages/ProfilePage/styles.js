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
  height: 414px;
  background: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin-top: -4rem;
`;

export {
    BackgroundBanner,
    ContentBox,
    PageContainer,
};

