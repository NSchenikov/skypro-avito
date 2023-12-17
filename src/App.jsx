import { AppRoutes } from "../src/routes/routes";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  // let navigate = useNavigate();

  // const handleLogin = () => setUser(localStorage.setItem("user", "token"));
  // const handleLogout = () => {
  //   setUser(localStorage.clear());
  //   // navigate("/login", { replace: true });
  // };
  return (
    <div className="App">
      <div className="App-layout">
        <AppRoutes
          user={user}
          // onAuthButtonClick={user ? handleLogout : handleLogin}
        ></AppRoutes>
      </div>
    </div>
  );
}

export default App;
