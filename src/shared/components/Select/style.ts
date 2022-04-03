import styled from 'styled-components';

export const SelectControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
`;

export const Select = styled.select`
  flex-grow: 0;
  padding: 0.1rem;
  width: 100px;
  color: ${({ theme }) => theme.text.default};
  background-color: ${({ theme }) => theme.secondary};
  filter: brightness(0.8);
  border: none;
  outline: none;
  border-radius: 0%.1rem;
`;
