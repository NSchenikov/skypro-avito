import { useState } from "react";
import "./search.css";

export const Search = ({ setSearchValue }) => {
  let [searchFieldValue, setSearchFieldValue] = useState("");
  return (
    <div className="main__search search">
      <img className="search__logo-img" src="img/logo.png" alt="logo" />
      <img className="search__logo-mob-img" src="img/logo-mob.png" alt="logo" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="search__form"
        action="#"
      >
        <input
          className="search__text"
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          value={searchFieldValue}
          onChange={(e) => {
            setSearchFieldValue(e.target.value);
          }}
        />
        <input
          className="search__text-mob"
          type="search"
          placeholder="Поиск"
          name="search-mob"
          value={searchFieldValue}
          onChange={(e) => {
            setSearchFieldValue(e.target.value);
          }}
        />
        <button
          onClick={() => setSearchValue(searchFieldValue)}
          className="search__btn btn-hov02"
          type="submit"
        >
          Найти
        </button>
      </form>
    </div>
  );
};
