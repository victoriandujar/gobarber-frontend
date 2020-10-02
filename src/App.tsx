import React from "react";

import GlobalStyle from "./global/styles";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

import AppProvider from "./context";

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
