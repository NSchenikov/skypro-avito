import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AdvList } from "../../components/advList/advList";
import { UploadPhoto } from "../../components/uploadPhoto/uploadPhoto";
import {
  fetchCurrentUserData,
  getMyAllAds,
  baseUrl,
  updateUserData,
} from "../../API/api";
import "./profile.css";
export const Profile = () => {
  const [currentUserData, setCurrentUserData] = useState([]);
  const [myAds, setMyAds] = useState([]);
  const [avatarOnChange, setAvatarOnChange] = useState("");
  let email = localStorage.getItem("mail");
  const [formData, setFormData] = useState({
    role: "user",
    email: email,
    name: currentUserData.name,
    surname: currentUserData.surname,
    phone: currentUserData.phone ? currentUserData.phone : "",
    city: currentUserData.city,
  });
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

  useEffect(() => {
    setFormData({
      role: "user",
      email: email,
      name: currentUserData.name,
      surname: currentUserData.surname,
      phone: currentUserData.phone ? currentUserData.phone : "",
      city: currentUserData.city,
    });
  }, [currentUserData, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData({ formData });
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFormData({ ...formData, name: newName });
  };

  const handleSurnameChange = (e) => {
    const newSurname = e.target.value;
    setFormData({ ...formData, surname: newSurname });
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setFormData({ ...formData, city: newCity });
  };

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setFormData({ ...formData, phone: newPhone });
  };

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
                <form className="menu__form" action="#" onSubmit={handleSubmit}>
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
                      <form
                        className="settings__form"
                        action="#"
                        onSubmit={handleSubmit}
                      >
                        <div className="settings__div">
                          <label htmlFor="fname">Имя</label>
                          <input
                            className="settings__f-name"
                            id="settings-fname"
                            name="fname"
                            type="text"
                            placeholder=""
                            onChange={handleNameChange}
                            value={formData.name ? formData.name : ""}
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="lname">Фамилия</label>
                          <input
                            className="settings__l-name"
                            id="settings-lname"
                            name="lname"
                            type="text"
                            placeholder=""
                            onChange={handleSurnameChange}
                            value={formData.surname ? formData.surname : ""}
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="city">Город</label>
                          <input
                            className="settings__city"
                            id="settings-city"
                            name="city"
                            type="text"
                            placeholder=""
                            onChange={handleCityChange}
                            value={formData.city ? formData.city : ""}
                          />
                        </div>

                        <div className="settings__div">
                          <label htmlFor="phone">Телефон</label>
                          <input
                            className="settings__phone"
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            placeholder=""
                            onChange={handlePhoneChange}
                            value={formData.phone ? formData.phone : ""}
                          />
                        </div>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                          type="submit"
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
