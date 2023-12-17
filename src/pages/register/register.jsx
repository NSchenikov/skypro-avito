import "./signup.css";
export const Register = () => {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login" id="formLogUp" action="#">
            <div className="modal__logo">
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
            <button className="modal__btn-signup-ent" id="SignUpEnter">
              <a href="/">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
