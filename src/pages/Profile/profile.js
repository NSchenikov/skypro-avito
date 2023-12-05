import "./profile.css";
export const Profile = () => {
  return (
    <div class="wrapper">
      <div class="container">
        <header class="header">
          <nav class="header__nav">
            <div class="header__logo logo-mob">
              <a class="logo-mob__link" href="" target="_blank">
                <img class="logo-mob__img" src="img/logo-mob.png" alt="logo" />
              </a>
            </div>
            <button class="header__btn-putAd btn-hov01" id="btputAd">
              Разместить объявление
            </button>
            <button class="header__btn-lk btn-hov01" id="btnlk">
              Личный кабинет
            </button>
          </nav>
        </header>
        <main class="main">
          <div class="main__container">
            <div class="main__center-block">
              <div class="main__menu menu">
                <a class="menu__logo-link" href="" target="_blank">
                  <img class="menu__logo-img" src="img/logo.png" alt="logo" />
                </a>
                <form class="menu__form" action="#">
                  <button class="menu__btn btn-hov02" id="btnGoBack">
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 class="main__h2">Здравствуйте, Антон!</h2>

              <div class="main__profile profile">
                <div class="profile__content">
                  <h3 class="profile__title title">Настройки профиля</h3>
                  <div class="profile__settings settings">
                    <div class="settings__left">
                      <div class="settings__img">
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                      <a class="settings__change-photo" href="" target="_self">
                        Заменить
                      </a>
                    </div>
                    <div class="settings__right">
                      <form class="settings__form" action="#">
                        <div class="settings__div">
                          <label for="fname">Имя</label>
                          <input
                            class="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            value="Ан"
                            placeholder=""
                          />
                        </div>

                        <div class="settings__div">
                          <label for="lname">Фамилия</label>
                          <input
                            class="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            value="Городецкий"
                            placeholder=""
                          />
                        </div>

                        <div class="settings__div">
                          <label for="city">Город</label>
                          <input
                            class="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            value="Санкт-Петербург"
                            placeholder=""
                          />
                        </div>

                        <div class="settings__div">
                          <label for="phone">Телефон</label>
                          <input
                            class="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            value="89161234567"
                            placeholder="+79161234567"
                          />
                        </div>

                        <button
                          class="settings__btn btn-hov02"
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="main__title title">Мои товары</h3>
            </div>
            <div class="main__content">
              <div class="content__cards cards">
                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>

                <div class="cards__item">
                  <div class="cards__card card">
                    <div class="card__image">
                      <a href="" target="_blank">
                        <img src="#" alt="picture" />
                      </a>
                    </div>
                    <div class="card__content">
                      <a href="" target="_blank">
                        <h3 class="card__title">
                          Ракетка для большого тенниса Triumph Pro ST
                        </h3>
                      </a>
                      <p class="card__price">2&nbsp;200&nbsp;₽</p>
                      <p class="card__place">Санкт Петербург</p>
                      <p class="card__date">Сегодня в&nbsp;10:45</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="footer">
          <div class="footer__container">
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div class="footer__img">
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
