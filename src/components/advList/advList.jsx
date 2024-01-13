import { useNavigate } from "react-router-dom";
import "./advList.css";
export const baseUrl = "http://127.0.0.1:8090/";
export const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const AdvList = ({ ads }) => {
  const navigate = useNavigate();

  return ads.map((ad, index) => {
    let imgUrl =
      ad.images.length !== 0
        ? `${baseUrl}${ad.images[0].url}`
        : "/img/ad_images/nophoto.png";

    let date = new Date(ad.created_on);
    let day = date.getDate();
    let month = date.getMonth();
    let years = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours < 10 ? (hours = "0" + hours) : (hours = hours + "");
    minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes + "");

    let publicationDate = `${day} ${months[month]} ${years} в ${hours}:${minutes}`;

    const handleClick = () => {
      navigate(`/advpage/${ad.id}`, {
        state: {
          adv: ad,
          publicationDate: publicationDate,
          imgUrl: imgUrl,
          allAds: ads,
        },
      });
    };

    return (
      <div className="cards__item" key={index} onClick={handleClick}>
        <div className="cards__card card">
          <div className="card__image">
            <img alt="pic" src={imgUrl} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{ad.title}</h3>
            <p className="card__price">{ad.price}&nbsp;₽</p>
            <p className="card__place">{ad.user.city}</p>
            <p className="card__date">{publicationDate}</p>
          </div>
        </div>
      </div>
    );
  });
};
