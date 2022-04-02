import styled from 'styled-components';

export const FormContainer = styled.form`
  min-width: 300px;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  background-color: ${props => props.theme.secondary};
  padding: 1rem;
  box-shadow: 0.5px 0.6px 0.9px hsl(0deg 0% 63% / 0.34),
    0.8px 0.9px 1.4px -1.2px hsl(0deg 0% 63% / 0.34),
    1.8px 2.3px 3.3px -2.5px hsl(0deg 0% 63% / 0.34);
`;

export const FormButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: ${props => props.theme.colors.blue};
`;
