import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
      display: none;  
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
