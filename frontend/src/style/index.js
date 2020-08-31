import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
font-size: 16px;
box-sizing: border-box; 
font-family: 'Roboto', sans-serif;
border: transparent 0px
}
:focus {
    outline: none;
}
::placeholder,
  ::-webkit-input-placeholder {
    height: 73px;
    width: 26px;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: black;
  }
  :focus::placeholder {
    color: transparent;
  }
`;
