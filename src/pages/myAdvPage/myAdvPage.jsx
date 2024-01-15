import { Header } from "../../components/header/header";
import "./my-article.css";

export const MyAdvPage = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* <header className="header">
          <nav className="header__nav">
            <div className="header__logo logo-mob">
              <a className="logo-mob__link" href="/" target="_blank">
                <img
                  className="logo-mob__img"
                  src="img/logo-mob.png"
                  alt="logo"
                />
              </a>
            </div>
            <button className="header__btn-putAd btn-hov01" id="btputAd">
              Разместить объявление
            </button>
            <button className="header__btn-lk btn-hov01" id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header> */}
        <Header />
        <main className="main">
          <div className="main__container">
            <div className="main__menu menu">
              <a className="menu__logo-link" href="/" target="_blank">
                <img className="menu__logo-img" src="img/logo.png" alt="logo" />
              </a>
              <form className="menu__form" action="#">
                <button className="menu__btn-serch btn-hov02" id="btnGoBack">
                  Вернуться на&nbsp;главную
                </button>
              </form>
            </div>
          </div>

          <div className="main__artic artic">
            <div className="artic__content article">
              <div className="article__left">
                <div className="article__fill-img">
                  <div className="article__img">
                    <img src="" alt="" />
                  </div>
                  <div className="article__img-bar">
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                    <div className="article__img-bar-div">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="article__img-bar-mob img-bar-mob">
                    <div className="img-bar-mob__circle circle-active"></div>
                    <div className="img-bar-mob__circle"></div>
                    <div className="img-bar-mob__circle"></div>
                    <div className="img-bar-mob__circle"></div>
                    <div className="img-bar-mob__circle"></div>
                  </div>
                </div>
              </div>
              <div className="article__right">
                <div className="article__block">
                  <h3 className="article__title title">
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </h3>
                  <div className="article__info">
                    <p className="article__date">Сегодня в 10:45</p>
                    <p className="article__city">Санкт-Петербург</p>
                    <a
                      className="article__link"
                      href="/"
                      target="_blank"
                      rel=""
                    >
                      4 отзыва
                    </a>
                  </div>
                  <p className="article__price">2 200 ₽</p>
                  <div className="article__btn-block">
                    <button className="article__btn btn-redact btn-hov02">
                      Редактировать
                    </button>
                    <button className="article__btn btn-remove btn-hov02">
                      Снять с публикации
                    </button>
                  </div>

                  <div className="article__author author">
                    <div className="author__img">
                      <img src="" alt="" />
                    </div>
                    <div className="author__cont">
                      <p className="author__name">Антон</p>
                      <p className="author__about">
                        Продает товары с&nbsp;мая 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main__container">
            <h3 className="main__title title">Описание товара</h3>
            <div className="main__content">
              <p className="main__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="footer__container">
            <div className="footer__img">
              <a href="/" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div className="footer__img">
              <a href="/" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div className="footer__img">
              <a href="/" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
