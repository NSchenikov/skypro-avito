import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import { AddNewAdv } from "../addNewAdv/addNewAdv";
import "./header.css";

export const Header = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [user, setUser] = useState(null);
  const [addAdvShow, onAddAdvShow] = useState(false);
  let navigate = useNavigate();
  const handleLogOut = () => {
    setUser(localStorage.clear());
    setIsLoggedIn(false);
    setAuthUser(null);
    navigate("/login", { replace: true });
  };
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          {!localStorage.getItem("user") ? (
            <button
              className="header__btn-main-enter btn-hov01"
              id="btnMainEnter"
              onClick={() => navigate("/login")}
            >
              Вход в личный кабинет
            </button>
          ) : (
            <>
              <button
                className="header__btn-putAd btn-hov01"
                id="btputAd"
                // onClick={() => navigate("/addnewadv")}
                onClick={() => onAddAdvShow(true)}
              >
                Разместить объявление
              </button>
              <button
                className="header__btn-lk btn-hov01"
                id="btnlk"
                onClick={() => navigate("/profile")}
              >
                Личный кабинет
              </button>
              <button
                className="header__btn-lk btn-hov01"
                id="btnlk"
                onClick={handleLogOut}
              >
                Выйти
              </button>
            </>
          )}
        </nav>
      </header>
      {addAdvShow && (
        <div className="modal">
          <div className="modal-content">
            <AddNewAdv onAddAdvShow={onAddAdvShow} />
          </div>
        </div>
      )}
    </>
  );
};
