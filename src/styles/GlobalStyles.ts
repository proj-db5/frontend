import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import ColorSystem from "./colorSystem";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${ColorSystem};

  html,
  body {
    font-family: 'sans-serif';
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  * {
    box-sizing: border-box;
    font-family: 'sans-serif';
  }
`;
