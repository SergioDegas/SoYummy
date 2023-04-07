import React from "react";
import ReactDOM from "react-dom/client";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import { App } from "./Components/App/App";
import { themeLight } from "./themes/themeLight";
import { GlobalStyle } from "./Components/GlobalStyles";
// import { themeDark } from "./themes/themeDark";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/">
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
