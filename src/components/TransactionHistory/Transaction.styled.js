import styled from 'styled-components';

export const Transaction = styled.table`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  th {
    font-weight: bold;
    padding: 5px;
    background: #88a8ed;
    border: 1px solid #dddddd;
    width: calc(100% / 3);
  }

  td {
    padding: 5px 10px;
    border: 1px solid #eee;
    text-align: left;
  }

  tbody tr:nth-child(odd) {
    background: #fff;
  }

  tbody tr:nth-child(even) {
    background: linear-gradient(270deg, #cfecd0, #a0cea7, #9ec0db);
  }
`;
