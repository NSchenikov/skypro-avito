import "./reviews.css";

export const Reviews = () => {
  return (
    <div className="wrapper">
      <div className="container-bg">
        <div className="modal__block">
          <div className="modal__content">
            <h3 className="modal__title">Отзывы о товаре</h3>
            <div className="modal__btn-close">
              <div className="modal__btn-close-line"></div>
            </div>
            <div className="modal__scroll">
              <form
                className="modal__form-newArt form-newArt"
                id="formNewArt"
                action="#"
              >
                <div className="form-newArt__block">
                  <label for="text">Добавить отзыв</label>
                  <textarea
                    className="form-newArt__area"
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </div>
                <button
                  className="form-newArt__btn-pub btn-hov02"
                  id="btnPublish"
                >
                  Опубликовать
                </button>
              </form>

              <div className="modal__reviews reviews">
                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="reviews__review review">
                  <div className="review__item">
                    <div className="review__left">
                      <div className="review__img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="review__right">
                      <p className="review__name font-t">
                        Олег <span>14 августа</span>
                      </p>
                      <h5 className="review__title font-t">Комментарий</h5>
                      <p className="review__text font-t">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
