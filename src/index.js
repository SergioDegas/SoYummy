import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { App } from "./Components/App/App";
import { themeLight } from "./themes/themeLight";
import { GlobalStyle } from "./Components/GlobalStyles";
// import { themeDark } from "./themes/themeDark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
