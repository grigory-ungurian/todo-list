import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  width: 100%;
  height: 100vh;
}
`;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Global />
    <App />
  </>
);
