import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, deleteImg } from "../../API/api";
import "./atclsetting.css";

export const AdvSettings = ({ setCorrectAdvModalOnShow }) => {
  const location = useLocation();
  console.log("location", location);
  const navigate = useNavigate();
  const adv = location.state;
  // console.log(adv);
  const [title, setTitle] = useState(adv.adv.title);
  const [description, setDescription] = useState(adv.adv.description);
  const [price, setPrice] = useState(adv.adv.price);
  const [imgs, setImgs] = useState(adv.adv.images);

  useEffect(() => {
    console.log("картиночки", imgs);
  }, [imgs]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const handlePriceChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
      const newPrice = Number(inputValue);
      setPrice(newPrice);
    }
  };

  const handleFileAdd = (e) => {
    const files = Array.from(e.target.files); //
    if (imgs.length + files.length <= 5) {
      const newImages = files.map((file) => ({
        id: Date.now(),
        url: URL.createObjectURL(file),
        file: file,
      }));

      setImgs([...imgs, ...newImages]);
    } else {
      alert("Максимальное количество изображений - 5");
    }
  };

  const handleImgDelete = (e, fileUrl, index) => {
    if (imgs[index].file) {
      const newArr = [...imgs];
      newArr.splice(index, 1);
      setImgs(newArr);
    } else {
      e.preventDefault();
      console.log("id", adv.adv.id);
      console.log(fileUrl);
      deleteImg({ id: adv.adv.id, fileUrl: fileUrl })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
        >
          <div className="form-newArt__block">
            <label htmlFor="name">Название</label>
            <input
              className="form-newArt__input"
              type="text"
              name="name"
              id="formName"
              placeholder="Введите название"
              onChange={(e) => handleTitleChange(e)}
              value={title}
            />
          </div>
          <div className="form-newArt__block">
            <label htmlFor="text">Описание</label>
            <textarea
              className="form-newArt__area"
              name="text"
              id="formArea"
              cols="auto"
              rows="10"
              placeholder="Введите описание"
              onChange={(e) => handleDescriptionChange(e)}
              value={description}
            ></textarea>
          </div>
          <div className="form-newArt__block">
            <p className="form-newArt__p">
              Фотографии товара<span>не более 5 фотографий</span>
            </p>
            {imgs.length < 5 && (
              <div className="form-newArt__bar-img">
                {imgs.map((image, index) => (
                  <div className="form-newArt__img image-upload" key={index}>
                    <div
                      className="close"
                      onClick={(e) =>
                        handleImgDelete(
                          e,
                          image.file ? image.url : `${baseUrl}/${image.url}`,
                          // image.url,
                          index
                        )
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
                    onChange={handleFileAdd}
                    multiple
                  />
                  <img src="" alt="" />
                </div>
              </div>
            )}
            {imgs.length === 5 && (
              <div className="form-newArt__bar-img">
                {imgs.map((image, index) => (
                  <div className="form-newArt__img image-upload" key={index}>
                    <div
                      className="close"
                      onClick={(e) =>
                        handleImgDelete(
                          e,
                          image.file ? image.url : `${baseUrl}/${image.url}`,
                          index
                        )
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
              onChange={(e) => handlePriceChange(e)}
              value={price}
            />
            <div className="form-newArt__input-price-cover"></div>
          </div>

          <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
