import styled from 'styled-components';

export const Container = styled.div`
  background-image: linear-gradient(-100deg, #240b36, #c31432);
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 150px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 5px;
  padding: 30px 20px;

  background: rgba(245,245,245, 0.8);
  box-shadow: 4px 4px 4px rgba(33,33,33, 0.6);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.span`
  font-family: Nunito;
  color: #fff;
  font-weight: 500;
  font-size: 38px;
  margin-bottom: 50px;
`;

export const Version = styled.span`
  font-size: 12px;
  color: #cecece;
  font-family: Montserrat;
  justify-self: center;
`;
