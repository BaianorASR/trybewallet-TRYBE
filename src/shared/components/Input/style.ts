import styled from 'styled-components';

export const InputControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  flex-grow: 1;
  padding: 1.2rem 0.5rem 0.2rem 0.5rem;
  font-size: 1rem;
  background: ${props => props.theme.secondary};
  border-bottom: 2x solid ${props => props.theme.primary};
  filter: brightness(0.8);
  border: none;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  position: absolute;
  left: 10px;
  bottom: 5px;
  z-index: 2;
  transition: transform 0.3s ease;

  ${Input}:focus ~ &,
  ${Input}:valid ~ & {
    transition: transform 0.3s ease;
    transform: translateY(-18px);
    font-size: 0.7rem;
    font-weight: 500;
  }
`;
