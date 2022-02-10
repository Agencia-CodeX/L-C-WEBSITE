import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  :root{
    --primary: #0D0D2B;
    --secundary: #2B076E;
    --accent: #3671E9;
    --white: #FFFFFF;
    --lightBG: #F8F9FB;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--primary)
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
      cursor: pointer;
    }

`;