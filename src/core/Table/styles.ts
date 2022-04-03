import styled, { css } from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  ${({ theme }) => css`
    background-color: ${theme.primary};
    color: ${theme.text.alt};
  `}
  overflow-x: scroll;
  font-size: 0.9rem;
`;

export const TableRow = styled.tr`
  max-height: 10px;
`;

export const TableTh = styled.th`
  padding: 5px 0;
  width: 10px;
`;
