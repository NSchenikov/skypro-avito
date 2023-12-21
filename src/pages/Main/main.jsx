import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ad } from "../../components/ad/ad";
import { getAds } from "../../API/api";
import "./main.css";

export const Main = () => {
  let [ads, setAds] = useState([]);

  useEffect(() => {
    getAds().then((response) => {
      setAds(response);
      console.log(response);
    });
  }, []);
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <nav className="header__nav">
            <button
              className="header__btn-main-enter btn-hov01"
              id="btnMainEnter"
            >
              <Link to="login">Вход в личный кабинет</Link>
            </button>
          </nav>
        </header>
        <main className="main">
          <div className="main__search search">
            <img className="search__logo-img" src="img/logo.png" alt="logo" />
            <img
              className="search__logo-mob-img"
              src="img/logo-mob.png"
              alt="logo"
            />
            <form className="search__form" action="#">
              <input
                className="search__text"
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
              />
              <input
                className="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button className="search__btn btn-hov02">Найти</button>
            </form>
          </div>
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>

            <div className="main__content">
              <div className="cards">
                <Ad ads={ads} />;
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__container">
            <div className="footer__img">
              <img src="img/icon_01.png" alt="home" />
            </div>
            <div className="footer__img">
              <img src="img/icon_02.png" alt="home" />
            </div>
            <div className="footer__img">
              <img src="img/icon_03.png" alt="home" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
