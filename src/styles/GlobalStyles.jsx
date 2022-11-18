import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    body {
        user-select: none;
        background-color: #191919;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        width: 90%;
        max-width:1200px;
        margin: auto;
        color:#FFFFFF;
    }
    img{
        max-width: 100%;
        height: auto;
    }
`;

export default GlobalStyle;
