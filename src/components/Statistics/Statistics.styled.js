import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  width: calc(100% / 5);

  font-size: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  span {
    font-weight: 500;
    text-shadow: #fc0 1px 0 10px;
  }
`;

export const Section = styled.section`
  margin: 30px 0 30px;
`;

export function getRandomHexColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
