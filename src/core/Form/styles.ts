import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: 0.8rem;
  background-color: ${props => props.theme.secondary};
  justify-content: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  box-shadow: 0.5px 0.6px 0.9px hsl(0deg 0% 63% / 0.34),
    0.8px 0.9px 1.4px -1.2px hsl(0deg 0% 63% / 0.34),
    1.8px 2.3px 3.3px -2.5px hsl(0deg 0% 63% / 0.34);
`;

export const FormButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    color: ${theme.text.alt};
  `}

  padding: 10px;
  font-weight: 600;
  border: none;
  border-radius: 0.2rem;
`;
