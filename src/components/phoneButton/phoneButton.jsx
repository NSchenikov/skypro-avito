import { useState } from "react";
import "./phoneButton.css";

export const PhoneButton = ({ userData }) => {
  let [phoneOnShow, setPhoneOnShow] = useState(false);
  const getShortenedPhone = (phone) => {
    let fewNums = phone.slice(0, 4);
    let xes = "";
    for (let i = 5; i <= phone.length; i++) {
      xes = xes + "X";
    }
    let shortenedPhone = fewNums + xes;
    return shortenedPhone;
  };
  return (
    <button
      className="article__btn btn-hov02"
      onClick={() => {
        setPhoneOnShow(!phoneOnShow);
      }}
    >
      Показать&nbsp;телефон
      <br />
      {phoneOnShow
        ? userData
          ? userData
          : "телефон не указан"
        : userData
        ? getShortenedPhone(userData)
        : "телефон не указан"}
    </button>
  );
};
