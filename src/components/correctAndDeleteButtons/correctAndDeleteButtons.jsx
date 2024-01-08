import { deleteAd } from "../../API/api";
import { useNavigate } from "react-router-dom";

export const CorrectAndDeleteButtons = ({ currentAdId }) => {
  let navigate = useNavigate();

  const handleRemoveAd = (e) => {
    e.preventDefault();
    deleteAd({ id: currentAdId })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/profile");
  };
  return (
    <div className="article__btn-block">
      <button className="article__btn btn-redact btn-hov02">
        Редактировать
      </button>
      <button
        className="article__btn btn-remove btn-hov02"
        onClick={handleRemoveAd}
      >
        Снять с публикации
      </button>
    </div>
  );
};
