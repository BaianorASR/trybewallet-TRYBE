import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${({ theme }) => css`
      color: ${theme.text.default};
      background-image: url(${theme.image});
      tr,
      td,
      table,
      thead,
      tbody {
        background-color: ${theme.background};
      }
    `}
      font: 300 16px 'Roboto', sans-serif;
      background-size: cover;
      background-position: center;
      width: 100vw;
      height: 100vh;

  }

`;

export default GlobalStyles;
