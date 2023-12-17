import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

export const Main = () => {
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
              {/* <div className="content__cards cards"> */}
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div className="cards__item">
                  <div className="cards__card card">
                    <div className="card__image">
                      <img alt="pic" src="#" />
                    </div>
                    <div className="card__content">
                      <h3 className="card__title">
                        Ракетка для большого тенниса Triumph Pro ST
                      </h3>
                      <p className="card__price">2&nbsp;200&nbsp;₽</p>
                      <p className="card__place">Санкт Петербург</p>
                      <p className="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>
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
