import "./signin.css";

export const Login = () => {
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
            <button className="modal__btn-enter" id="btnEnter">
              <a href="../index.html">Войти</a>
            </button>
            <button className="modal__btn-signup" id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
