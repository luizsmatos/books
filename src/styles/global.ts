import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root {
    --violet-red: #B22E6F;
    --white: #FFFFFF;
    --black: #000000;
    --gray-20: #333333;

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Heebo, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
