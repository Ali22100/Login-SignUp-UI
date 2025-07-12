import React, { useState } from "react";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/Sign";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login onSwitch={toggleForm} />
      ) : (
        <SignUp onSwitch={toggleForm} />
      )}
    </>
  );
};

export default App;
