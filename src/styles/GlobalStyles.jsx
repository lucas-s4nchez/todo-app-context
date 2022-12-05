import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    body {
        user-select: none;
        background:#181818;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent;
        color:#FFFFFF;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    h1{
      margin-block: 40px;
    }
`;

export default GlobalStyle;
