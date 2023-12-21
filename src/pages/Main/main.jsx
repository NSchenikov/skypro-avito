import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAds } from "../../API/api";
import "./main.css";

export const Main = () => {
  const baseUrl = "http://127.0.0.1:8090/";
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
                {ads.map((ad, index) => {
                  let imgUrl =
                    ad.images.length !== 0
                      ? `${baseUrl}${ad.images[0].url}`
                      : "";

                  let date = new Date(ad.created_on);
                  let day = date.getDate();
                  let month = date.getMonth();
                  var months = [
                    "января",
                    "февраля",
                    "марта",
                    "апреля",
                    "мая",
                    "июня",
                    "июля",
                    "августа",
                    "сентября",
                    "октября",
                    "ноября",
                    "декабря",
                  ];
                  let years = date.getFullYear();
                  let hours = date.getHours();
                  let minutes = date.getMinutes();
                  hours < 10 ? (hours = "0" + hours) : (hours = hours + "");
                  minutes < 10
                    ? (minutes = "0" + minutes)
                    : (minutes = minutes + "");
                  return (
                    <div className="cards__item" key={index}>
                      <div className="cards__card card">
                        <div className="card__image">
                          <img alt="pic" src={imgUrl} />
                        </div>
                        <div className="card__content">
                          <h3 className="card__title">{ad.title}</h3>
                          <p className="card__price">{ad.price}&nbsp;₽</p>
                          <p className="card__place">{ad.user.city}</p>
                          <p className="card__date">
                            {`${day} ${months[month]} ${years} в ${hours}:${minutes}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
