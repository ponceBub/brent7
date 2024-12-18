import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      {!user ? (
        <div>
          <h1>Register</h1>
          <Registration setUser={setUser} />

          <h1>Login</h1>
          <Login setUser={setUser} />
        </div>
      ) : (
        <Profile user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default App;