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
  padding: 8px 12px;
  min-width: 60px;

  font-size: 20px;
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
