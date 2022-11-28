import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Login from "components/Auth/Login";
import Signup from "components/Auth/Signup";
import Dashboard from "components/Dashboard";
import PrivateRoute from "components/Common/PrivateRoute";
import usersApi from "apis/users";
import { useUserDispatch, useUserState } from "contexts/user";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const userDispatch = useUserDispatch();
  const { user } = useUserState();

  const fetchUserDetails = async () => {
    try {
      const { data: { user } } = await usersApi.currentUser();
      userDispatch({ type: "SET_USER", payload: { user: user} });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeLogger();
    setAuthHeaders();
    fetchUserDetails();
  }, []);

  const NoticeContainer = () => (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <NoticeContainer />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          component={Dashboard}
          condition={Boolean(user)}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default Main;