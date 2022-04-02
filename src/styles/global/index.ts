import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.text.default};
    font: 300 16px 'Roboto', sans-serif;
    background-image: url(${({ theme }) => theme.image});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
  }

`;

export default GlobalStyles;
