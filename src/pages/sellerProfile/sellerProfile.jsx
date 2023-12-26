import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl, months } from "../../components/advList/AdvList";
import { AdvList } from "../../components/advList/AdvList";
import { Header } from "../../components/header/header";
import { PhoneButton } from "../../components/phoneButton/phoneButton";
import "./sellerProfile.css";

export const SellerProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const adv = location.state;
  // console.log(adv);
  const dateObj = new Date(adv.adv.adv.user.sells_from);
  // console.log(dateObj);
  let month = dateObj.getMonth();
  let years = dateObj.getFullYear();
  // console.log("allAds", adv.adv.allAds);

  const userAds = adv.adv.allAds.filter(
    (item) => item.user.id === adv.adv.adv.user.id
  );
  // console.log(userAds);
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
                    src="/img/logo.png"
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

              <h2 className="main__h2">Профиль продавца</h2>

              <div className="main__profile-sell profile-sell">
                <div className="profile-sell__content">
                  <div className="profile-sell__seller seller">
                    <div className="seller__left">
                      <div className="seller__img">
                        <img
                          src={`${baseUrl}${adv.adv.adv.user.avatar}`}
                          alt="pic"
                        />
                      </div>
                    </div>
                    <div className="seller__right">
                      <h3 className="seller__title">{adv.adv.adv.user.name}</h3>
                      <p className="seller__city">{adv.adv.adv.user.city}</p>
                      <p className="seller__inf">
                        {`Продает товары с ${months[month]} ${years}`}
                      </p>

                      <div className="seller__img-mob-block">
                        <div className="seller__img-mob">
                          <a href="/" target="_self">
                            <img src="#" alt="pic" />
                          </a>
                        </div>
                      </div>
                      <PhoneButton userData={adv.adv.adv.user.phone} />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="main__title ">Товары продавца</h3>
            </div>
            <div className="main__content">
              <div className="content__cards cards">
                <AdvList ads={userAds} />
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
