import { useNavigate, Link } from "react-router-dom";
import "./signin.css";

export const Login = () => {
  const navigate = useNavigate();
  const setUser = () => {
    localStorage.setItem("user", "token");
    // user = true
    navigate("/", { replace: true });
  };
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" id="formLogIn" action="#">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button
              className="modal__btn-enter"
              id="btnEnter"
              onClick={setUser}
            >
              <a href="">Войти</a>
            </button>
            <button className="modal__btn-signup" id="btnSignUp">
              <Link to="/register">
                <a href="">Зарегистрироваться</a>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
