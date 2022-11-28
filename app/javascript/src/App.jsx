import React from "react";
import { UserProvider } from "contexts/user";

import Main from "components/Main";
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <UserProvider>
      <Main />
    </UserProvider>
  );

export default App;