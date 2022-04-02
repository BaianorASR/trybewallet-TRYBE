import { SiDogecoin } from 'react-icons/si';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text.alt};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 75px;
`;

export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const HeaderLogo = styled(SiDogecoin)`
  color: ${props => props.theme.secondary};
  font-size: 2rem;
`;
