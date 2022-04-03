import styled from 'styled-components';

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
  box-shadow: 0.5px 0.6px 0.9px hsl(0deg 0% 63% / 0.36),
    1.5px 1.9px 2.7px -0.8px hsl(0deg 0% 63% / 0.36),
    3.8px 4.7px 6.8px -1.7px hsl(0deg 0% 63% / 0.36),
    9.2px 11.4px 16.5px -2.5px hsl(0deg 0% 63% / 0.36);
  border-radius: 5px;

  background-color: ${props => props.theme.secondary};
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

  color: ${props => props.theme.text.default};
`;

export const LoginInput = styled.input.attrs(props => ({
  type: props.type,
  id: props.id,
}))`
  padding: 10px;

  border: none;
  border-radius: 5px;
  outline: 1px solid ${props => props.theme.secondary};

  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};

  font-size: 1.1rem;

  &::placeholder {
    color: ${props => props.theme.secondary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.secondary};
  }
`;

export const LoginButton = styled.button.attrs({ type: 'button' })`
  margin: auto;
  padding: 0.8rem;
  width: fit-content;

  border: none;
  border-radius: 5px;
  box-shadow: 0.5px 0.6px 0.9px hsl(0deg 0% 63% / 0.34),
    0.8px 0.9px 1.4px -1.2px hsl(0deg 0% 63% / 0.34),
    1.8px 2.3px 3.3px -2.5px hsl(0deg 0% 63% / 0.34);

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
