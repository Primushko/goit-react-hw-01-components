import styled from '@emotion/styled';

export const TransactionHistori = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: ${p => p.theme.colors.transactionBg};
  color: ${p => p.theme.colors.transactionColor};
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

export const TransactionBody = styled.tbody``;

export const TransactionHead = styled.thead`
  border: 0px solid ${p => p.theme.colors.transactionBorder};
  background-color: ${p => p.theme.colors.tHeadBg};
  color: ${p => p.theme.colors.transactionBg};
  text-transform: uppercase;
`;

export const TransactionTitle = styled.th`
  width: 33.3%;
  padding: 15px 5px;
`;
export const TransactionRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.tRow};
  }
`;
export const TransactionDescription = styled.td`
  padding: 15px 5px;
  text-transform: capitalize;
`;
