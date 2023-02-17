import styled from 'styled-components';

export const Friend = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  width: 100%;
  font-size: 24px;

  border: 1px solid #999999;
  border-radius: 8px;

  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background: linear-gradient(270deg, #cfecd0, #a0cea7, #9ec0db);
`;

export const Indicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
