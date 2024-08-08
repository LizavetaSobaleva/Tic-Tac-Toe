import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Arial', sans-serif;
    background-color: rgb(247, 248, 249);
    place-items: center;
    min-height: 100vh;
  }
`;
