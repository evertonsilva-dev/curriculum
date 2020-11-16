import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    font-family: 'Abhaya Libre', serif;
  }
  *, *::before,*::after{
    box-sizing:border-box;
  }
`;
export default GlobalStyle;
