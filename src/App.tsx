import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./global/styles";
import Routes from "./routes";

import AppProvider from "./context";

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
