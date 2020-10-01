import React from "react";

import GlobalStyle from "./global/styles";
import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
