import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { registerUser, getToken } from "../../API/api";
import "./signup.css";
export const Register = () => {
  function getRandomIntId(max) {
    return Math.floor(Math.random() * max);
  }
  const navigate = useNavigate();
  const id = getRandomIntId(500000000000000);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const validateForm = () => password === confirmPassword;
  const {
    authUser,
    setAuthUser,
    isLoggedIn,
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
    setLoading(true);
    const valForm = validateForm();
    if (valForm && password) {
      setError(null);
      console.log("submit");
      registerUser(id, email, password, firstName, lastName, null, city)
        .then(() => {
          getToken(email, password)
            .then((res) => {
              setUser("user", res.access_token, "refresh", res.refresh_token);
              setIsLoggedIn(true);
              setAuthUser(email);
            })
            .then(() => setLoading(false));
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
          console.log(error.message);
        });
    } else {
      event.preventDefault();
      setLoading(false);
      setError("Пароль не указан");
    }
  };
  const errorDiv = error ? <div className="error">{error}</div> : "";
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form
            className="modal__form-login"
            id="formLogUp"
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
              id="loginReg"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setEmail(e.target.value);
              }}
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setPassword(e.target.value);
              }}
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setConfirmPassword(e.target.value);
              }}
            />
            <input
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              value={firstName}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setFirstName(e.target.value);
              }}
            />
            <input
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              value={lastName}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setLastName(e.target.value);
              }}
            />
            <input
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              value={city}
              onChange={(e) => {
                setLoading(false);
                setError(null);
                setCity(e.target.value);
              }}
            />
            <div className="possibleError">
              {!validateForm() && (
                <p className="error">Введенные пароли не совпадают</p>
              )}
              {errorDiv}
            </div>
            <button
              className="modal__btn-signup-ent"
              id="SignUpEnter"
              disabled={loading}
              // onClick={() =>
              //   registerUser(
              //     9090909,
              //     "vpffffasasffff@gf.com",
              //     "gjjgjFFdDddfdffdfdDDslkfglkfglfk5674!",
              //     "Victymodfdd",
              //     "Hoppengoferdfdfdfd",
              //     "+982 5775785765757",
              //     "Labitnangis"
              //   )
              // }
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
