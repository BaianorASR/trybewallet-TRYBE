import styled, { css } from 'styled-components';

export const TableBody = styled.tbody`
  /* ${({ theme }) => css`
    background-color: ${theme.primary};
  `} */
`;

export const TableRow = styled.tr`
  ${({ theme }) => css`
    background-color: ${theme.secondary};
    color: ${theme.text.default};
  `}
  text-align: center;
`;
