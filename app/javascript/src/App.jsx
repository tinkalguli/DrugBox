import React from "react";
import { UserProvider } from "contexts/user";

import Main from "components/Main";

const App = () => (
    <UserProvider>
      <Main />
    </UserProvider>
  );

export default App;