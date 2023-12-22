import { React, useEffect, useState } from "react";
import { AdvList } from "../../components/advList/AdvList";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
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
        <Header />
        <main className="main">
          <Search />
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>

            <div className="main__content">
              <div className="cards">
                <AdvList ads={ads} />;
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
