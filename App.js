import { useLogin } from './hooks/useLogin';
import React from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { login, isPending } = useLogin();
  // const { user, authIsReady } = useContext(AuthContext);
  return (
    <div className="App">
      {user ? (
        <ProfileCard user={user} />
      ) : (
        <button className="btn login-btn" onClick={login}>
          Login With GitHub
        </button>
      )}
    </div>
  );
}

export default App;