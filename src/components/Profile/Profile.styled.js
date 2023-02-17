import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 8px;

  background-color: #fff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  img {
    width: 100%;
  }
`;

export const Name = styled.h2`
  margin: 16px 0 16px;
  font-size: 36px;
  font-style: italic;
  text-align: center;
`;

export const Info = styled.p`
  margin: 0 0 4px;
  text-align: center;
  font-size: 24px;
  color: #222222;
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: space-around;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  width: calc((100% - 16px) / 3);

  border: 1px solid black;
  border-radius: 12px;
  background-color: #14693034;

  p {
    margin: 0;
  }

  span {
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
  }
`;
