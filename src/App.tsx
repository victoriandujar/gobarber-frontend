import React from "react";

import GlobalStyle from "./global/styles";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
