import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  baseUrl,
  handleFileAdd,
  updateAd,
  handleImgDelete,
} from "../../API/api";
import "./atclsetting.css";

export const AdvSettings = ({ setCorrectAdvModalOnShow }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const adv = location.state.adv;

  const [adData, setAdData] = useState({
    title: adv?.title,
    description: adv?.description,
    price: adv?.price,
    images: adv?.images,
  });
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("inputChange");
    setAdData({
      ...adData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!adData.title) {
      setError("Введите название");
      return;
    }
    setError(false);
    updateAd({ advId: adv.id, adData: adData });
    navigate("/");
  };

  return (
    <div className="modal__block">
      <div className="modal__content">
        <h3 className="modal__title">Редактировать объявление</h3>
        <div
          className="modal__btn-close"
          onClick={() => setCorrectAdvModalOnShow(false)}
        >
          <div className="modal__btn-close-line"></div>
        </div>
        <form
          className="modal__form-newArt form-newArt"
          id="formNewArt"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="form-newArt__block">
            <label htmlFor="name">Название</label>
            <input
              className="form-newArt__input"
              type="text"
              name="title"
              id="formName"
              placeholder="Введите название"
              onChange={handleInputChange}
              value={adData.title}
            />
          </div>
          <div className="form-newArt__block">
            <label htmlFor="text">Описание</label>
            <textarea
              className="form-newArt__area"
              name="description"
              id="formArea"
              cols="auto"
              rows="10"
              placeholder="Введите описание"
              onChange={handleInputChange}
              value={adData.description}
            ></textarea>
          </div>
          <div className="form-newArt__block">
            <p className="form-newArt__p">
              Фотографии товара<span>не более 5 фотографий</span>
            </p>
            {adData?.images?.length < 5 && (
              <div className="form-newArt__bar-img">
                {adData?.images?.map((image, index) => (
                  <div className="form-newArt__img image-upload" key={index}>
                    <div
                      className="close"
                      onClick={() =>
                        handleImgDelete({
                          index: index,
                          advId: adv.id,
                          adData: adData,
                          setAdData: setAdData,
                        })
                      }
                    >
                      <div className="close-line"></div>{" "}
                    </div>
                    <label htmlFor="file-input">
                      <div className="form-newArt__img-cover"></div>
                    </label>
                    <img
                      src={image.file ? image.url : `${baseUrl}/${image.url}`}
                      alt=""
                    />
                  </div>
                ))}
                <div
                  className="form-newArt__img image-upload"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <label htmlFor="file-input">
                    <div className="form-newArt__img-cover"></div>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      handleFileAdd({ event: e, advId: adv.id }).then(
                        (uploadedImage) => {
                          setAdData((prevState) => ({
                            ...prevState,
                            images: [
                              ...prevState.images,
                              {
                                url: uploadedImage?.images[
                                  uploadedImage?.images?.length - 1
                                ].url,
                              },
                            ],
                          }));
                        }
                      );
                    }}
                    multiple
                  />
                  <img src="" alt="" />
                </div>
              </div>
            )}
            {adData?.images?.length === 5 && (
              <div className="form-newArt__bar-img">
                {adData?.images?.map((image, index) => (
                  <div className="form-newArt__img image-upload" key={index}>
                    <div
                      className="close"
                      onClick={() =>
                        handleImgDelete({
                          index: index,
                          advId: adv.id,
                          adData: adData,
                          setAdData: setAdData,
                        })
                      }
                    >
                      <div className="close-line"></div>{" "}
                    </div>
                    <label htmlFor="file-input">
                      <div className="form-newArt__img-cover"></div>
                    </label>
                    <img
                      src={image.file ? image.url : `${baseUrl}/${image.url}`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="form-newArt__block block-price">
            <label htmlFor="price">Цена</label>
            <input
              className="form-newArt__input-price"
              type="text"
              name="price"
              id="formName"
              onChange={handleInputChange}
              value={adData.price}
            />
            <div className="form-newArt__input-price-cover"></div>
          </div>
          <div style={{ color: `red` }} className="error">
            {error ? error : ""}
          </div>
          <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
