import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  z-index: -1;
  gap: 0.8rem;
  background-color: ${props => props.theme.secondary};
  justify-content: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

type FormButtonProps = {
  editor: boolean;
};

export const FormButton = styled.button<FormButtonProps>`
  ${({ theme, editor }) => css`
    background-color: ${editor ? theme.colors.green : theme.colors.blue};
    color: ${theme.text.alt};
  `}

  padding: 10px;
  font-weight: 600;
  border: none;
  border-radius: 0.2rem;

  &:disabled {
    filter: saturate(0.7);
  }

  &:hover {
    filter: saturate(1.3);
  }
`;
