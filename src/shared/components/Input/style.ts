import styled, { css } from 'styled-components';

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.secondary};
    border-bottom: 2x solid ${theme.primary};
    color: ${theme.text.default};
  `}
  flex-grow: 1;

  outline: none;
  border-radius: 2px;
  border: none;
  width: 100%;
  padding: 0.5rem;

  filter: brightness(0.8);
  font-size: 1rem;
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  transition: transform 0.3s ease;
`;

export const ErrTooltip = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.text.alt};
    border: 1px solid ${theme.secondary};
  `}
  top: -10px;
  border-radius: 2px;
  right: -15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.2rem;
  position: absolute;
  z-index: 2;
`;
