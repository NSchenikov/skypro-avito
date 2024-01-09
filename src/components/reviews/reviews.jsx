import { months } from "../advList/AdvList";
import { baseUrl } from "../advList/AdvList";
import { useState } from "react";
import { sendComment } from "../../API/api";
import "./reviews.css";

export const Reviews = ({
  setReviewsModalOnShow,
  comments,
  setComments,
  currentAdId,
}) => {
  const [textComment, setTextComment] = useState("");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setTextComment(newText);
  };

  const handleCommentSend = (e) => {
    sendComment({ currentAdId, textComment });
  };
  return (
    <div className="modal__block">
      <div className="modal__content">
        <h3 className="modal__title">Отзывы о товаре</h3>
        <div
          className="modal__btn-close"
          onClick={(e) => setReviewsModalOnShow(false)}
        >
          <div className="modal__btn-close-line"></div>
        </div>
        <div className="modal__scroll">
          <form
            className="modal__form-newArt form-newArt"
            id="formNewArt"
            action="#"
            onSubmit={(e) => handleCommentSend(e)}
          >
            <div className="form-newArt__block">
              <label htmlFor="text">Добавить отзыв</label>
              <textarea
                className="form-newArt__area"
                name="text"
                id="formArea"
                cols="auto"
                rows="5"
                placeholder="Введите описание"
                value={textComment}
                onChange={(e) => handleTextChange(e)}
              ></textarea>
            </div>
            <button
              className="form-newArt__btn-pub btn-hov02"
              id="btnPublish"
              type="submit"
            >
              Опубликовать
            </button>
          </form>

          <div className="modal__reviews reviews">
            {Array.isArray(comments) && comments.length > 0
              ? comments.map((comment) => {
                  let date = new Date(comment.created_on);
                  let day = date.getDate();
                  let month = date.getMonth();
                  return (
                    <div className="reviews__review review" key={comment.id}>
                      <div className="review__item">
                        <div className="review__left">
                          <div className="review__img">
                            <img
                              src={
                                comment.author.avatar
                                  ? `${baseUrl}${comment.author.avatar}`
                                  : ""
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="review__right">
                          <p className="review__name font-t">
                            {comment.author.name}
                            <span>{`${day} ${months[month]}`}</span>
                          </p>
                          <h5 className="review__title font-t">Комментарий</h5>
                          <p className="review__text font-t">{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "Оставьте отзыв первым!"}
          </div>
        </div>
      </div>
    </div>
  );
};
