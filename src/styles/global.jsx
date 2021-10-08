import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    max-width: 100%;
  }  

  body {
    height: 100vh;
    width: 100vw;
  }

  div {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }
`;