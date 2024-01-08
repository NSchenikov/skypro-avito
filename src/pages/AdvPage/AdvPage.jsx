import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../../components/header/header";
import { baseUrl, months } from "../../components/advList/AdvList";
import { PhoneButton } from "../../components/phoneButton/phoneButton";
import { fetchCurrentUserData } from "../../API/api";
import { CorrectAndDeleteButtons } from "../../components/correctAndDeleteButtons/correctAndDeleteButtons";
import "./article.css";

export const AdvPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adv = location.state;
  let [chosenImg, setChosenImg] = useState(adv.imgUrl);
  let [currentUserId, seCurrentUserId] = useState(null);
  const dateObj = new Date(adv.adv.user.sells_from);
  let month = dateObj.getMonth();
  let years = dateObj.getFullYear();

  const handleClick = () => {
    navigate(`/sellerprofile/${adv.adv.user.id}`, {
      state: {
        adv: adv,
        allAds: adv.allAds,
      },
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      fetchCurrentUserData().then((data) => {
        // console.log(data);
        seCurrentUserId(data.id);
      });
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <main className="main">
          <div className="main__container">
            <div className="main__menu menu">
              <a className="menu__logo-link" href="/" target="_blank">
                <img
                  className="menu__logo-img"
                  src="/img/logo.png"
                  alt="logo"
                />
              </a>
              <form className="menu__form" action="#">
                <button
                  className="menu__btn-serch btn-hov02"
                  id="btnGoBack"
                  onClick={() => navigate("/")}
                >
                  Вернуться на главную
                </button>
              </form>
            </div>
          </div>

          <div className="main__artic artic">
            <div className="artic__content article">
              <div className="article__left">
                <div className="article__fill-img">
                  <div className="article__img">
                    <img src={chosenImg} alt="" />
                  </div>
                  <div className="article__img-bar">
                    {adv.adv.images.length !== 0 ? (
                      adv.adv.images.map((img, index) => {
                        let imgUrl = `${baseUrl}${img.url}`;
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setChosenImg(imgUrl);
                            }}
                            className="article__img-bar-div"
                          >
                            <img src={imgUrl} alt="" />
                          </div>
                        );
                      })
                    ) : (
                      <div className="article__img-bar-div">
                        <img src="" alt="" />
                      </div>
                    )}
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
                  <h3 className="article__title title">{adv.adv.title}</h3>
                  <div className="article__info">
                    <p className="article__date">{adv.publicationDate}</p>
                    <p className="article__city">{adv.adv.user.city}</p>
                    <a
                      className="article__link"
                      href="/"
                      target="_blank"
                      rel=""
                    >
                      23 отзыва
                    </a>
                  </div>
                  <p className="article__price">{adv.adv.price} ₽</p>
                  {currentUserId ? (
                    currentUserId === adv.adv.user.id ? (
                      <CorrectAndDeleteButtons />
                    ) : (
                      <PhoneButton userData={adv.adv.user.phone} />
                    )
                  ) : (
                    <PhoneButton userData={adv.adv.user.phone} />
                  )}
                  <div className="article__author author" onClick={handleClick}>
                    <div className="author__img">
                      <img src={`${baseUrl}${adv.adv.user.avatar}`} alt="" />
                    </div>
                    <div className="author__cont">
                      <p className="author__name">{adv.adv.user.name}</p>
                      <p className="author__about">
                        {`Продает товары с ${months[month]} ${years}`}
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
              <p className="main__text">{adv.adv.description}</p>
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
