import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__btn-main-enter btn-hov01" id="btnMainEnter">
          <Link to="login">Вход в личный кабинет</Link>
        </button>
      </nav>
    </header>
  );
};
