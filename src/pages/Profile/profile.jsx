import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AdvList } from "../../components/advList/AdvList";
import { UploadPhoto } from "../../components/uploadPhoto/uploadPhoto";
import { fetchCurrentUserData, getMyAllAds, baseUrl } from "../../API/api";
import "./profile.css";
export const Profile = () => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const [myAds, setMyAds] = useState([]);
  const [avatarOnChange, setAvatarOnChange] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetchCurrentUserData().then((data) => {
      setCurrentUserData(data);
      setAvatarOnChange(data.avatar);
    });
    // console.log(currentUserData);
    getMyAllAds(localStorage.getItem("user")).then((data) => {
      setMyAds(data);
    });
  }, [avatarOnChange]);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <div className="main__container">
            <div className="main__center-block">
              <div className="main__menu menu">
                <a className="menu__logo-link" href="/" target="_blank">
                  <img
                    className="menu__logo-img"
                    src="img/logo.png"
                    alt="logo"
                  />
                </a>
                <form className="menu__form" action="#">
                  <button
                    className="menu__btn btn-hov02"
                    id="btnGoBack"
                    onClick={() => navigate("/")}
                  >
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className="main__h2">
                {`Здравствуйте, ${
                  currentUserData ? currentUserData.name : null
                }!`}
              </h2>

              <div className="main__profile profile">
                <div className="profile__content">
                  <h3 className="profile__title title">Настройки профиля</h3>
                  <div className="profile__settings settings">
                    <div className="settings__left">
                      <div className="settings__img">
                        {avatarOnChange && (
                          <img
                            src={`${baseUrl}/${currentUserData.avatar}`}
                            alt="pic"
                          />
                        )}
                      </div>
                      <UploadPhoto setAvatarOnChange={setAvatarOnChange} />
                    </div>
                    <div className="settings__right">
                      <form className="settings__form" action="#">
                        <div className="settings__div">
                          <label htmlFor="fname">Имя</label>
                          <input
                            className="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            defaultValue={
                              currentUserData ? currentUserData.name : null
                            }
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="lname">Фамилия</label>
                          <input
                            className="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            defaultValue={
                              currentUserData ? currentUserData.surname : null
                            }
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="city">Город</label>
                          <input
                            className="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            defaultValue={
                              currentUserData ? currentUserData.city : null
                            }
                            placeholder=""
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="phone">Телефон</label>
                          <input
                            className="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            defaultValue={
                              currentUserData ? currentUserData.phone : ""
                            }
                            placeholder=""
                          />
                        </div>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="main__title title">Мои товары</h3>
            </div>
            <div className="main__content">
              <div className="content__cards cards">
                {myAds ? (
                  <AdvList ads={myAds} />
                ) : (
                  <div>товары отсутствуют</div>
                )}
              </div>
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
