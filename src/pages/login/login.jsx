import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../API/api";
import { useAuth } from "../../Contexts/authContext";
import "./signin.css";
export const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    authUser,
    setAuthUser,
    setIsLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
  } = useAuth();
  const setUser = (user, token, refresh, refreshtok) => {
    localStorage.setItem(user, token);
    localStorage.setItem(refresh, refreshtok);
    navigate("/", { replace: true });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    console.log("submited form");
    if (!email) {
      setError("Введите email");
      setLoading(false);
      return;
    }
    if (!pattern.test(email.toLowerCase())) {
      setLoading(false);
      setError("Введите корректный email");
      return;
    }
    if (!password) {
      setError("Введите пароль");
      setLoading(false);
      return;
    }
    getToken(email, password)
      .then((res) => {
        setLoading(true);
        setUser("user", res.access_token, "refresh", res.refresh_token);
        setIsLoggedIn(true);
        setAuthUser(email);
        localStorage.setItem("mail", email);
        console.log(authUser);
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        if (error.message) {
          setLoading(false);
          console.log(error.message);
          setError("Вы ввели некорректные данные");
          return;
        }
        setLoading(false);
      });
  };

  const errorDiv = error ? <div className="error">{error}</div> : "";
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form
            className="modal__form-login"
            id="formLogIn"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="possibleError">{errorDiv}</div>
            <button
              className="modal__btn-enter"
              id="btnEnter"
              disabled={loading}
            >
              Войти
            </button>
            <button className="modal__btn-signup" id="btnSignUp">
              <Link to="/register">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
