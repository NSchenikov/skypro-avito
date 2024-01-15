import { React, useEffect, useState } from "react";
import { AdvList } from "../../components/advList/advList";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";
import { getAds } from "../../API/api";
import "./main.css";

export const Main = () => {
  let [ads, setAds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredAds, setFilteredAds] = useState(ads);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAds({ setLoading: setLoading })
      .then((response) => {
        setAds(response);
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Не удалось загрузить объявления, попробуйте позже");
      });
  }, []);
  useEffect(() => {
    const searchFilter = ads.filter((ad) =>
      ad.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredAds(searchValue ? searchFilter : ads);
  }, [searchValue, ads]);
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main className="main">
          <Search setSearchValue={setSearchValue} />
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>
            {loading ? (
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            ) : (
              <div className="main__content">
                <div className="cards">
                  <AdvList ads={filteredAds} />
                </div>
              </div>
            )}
            {error && (
              <div style={{ color: "red", marginTop: "-100px" }}>{error}</div>
            )}
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
