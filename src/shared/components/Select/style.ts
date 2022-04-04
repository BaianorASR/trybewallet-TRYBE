import styled, { css } from 'styled-components';

export const SelectControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
`;

export const Select = styled.select`
  flex-grow: 0;
  padding: 0.5rem;
  color: ${({ theme }) => theme.text.default};
  background-color: ${({ theme }) => theme.secondary};
  filter: brightness(0.8);
  border: none;
  outline: none;
  border-radius: 0%.1rem;
`;

export const ErrTooltip = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.text.alt};
    border: 1px solid ${theme.secondary};
  `}
  top: -10px;
  border-radius: 2px;
  right: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.2rem;
  position: absolute;
  z-index: 2;
`;
