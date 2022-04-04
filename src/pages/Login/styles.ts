import styled, { css } from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-grow: 0;

  padding: 10px;
  width: 300px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 5px;

  background-color: ${({ theme }) => theme.secondary};
`;

export const LoginTitle = styled.h1`
  color: ${props => props.theme.primary};

  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const LoginLabel = styled.label.attrs(props => ({
  htmlFor: props.id,
}))`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${({ theme }) => theme.text.default};
`;

export const LoginInput = styled.input.attrs(props => ({
  type: props.type,
  id: props.id,
}))`
  ${({ theme }) => css`
    padding: 10px;
    border: none;
    border-radius: 5px;

    font-size: 1.1rem;
    outline: 1px solid ${theme.secondary};

    background-color: ${theme.background};
    color: ${theme.primary};

    &::placeholder {
      color: ${theme.secondary};
    }

    &:focus {
      outline: 2px solid ${theme.secondary};
    }
  `}
`;

export const LoginButton = styled.button.attrs({ type: 'button' })`
  margin: auto;
  padding: 0.8rem;
  width: fit-content;

  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};

  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.background};

  font: 500 1rem 'Roboto', sans-serif;

  &:disabled {
    filter: contrast(0.5);
  }

  &:enabled:hover {
    filter: brightness(0.8);
  }
`;
