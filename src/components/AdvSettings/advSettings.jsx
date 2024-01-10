import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, deleteImg } from "../../API/api";
import "./atclsetting.css";

export const AdvSettings = ({ setCorrectAdvModalOnShow }) => {
  const location = useLocation();
  const adv = location.state.adv;
  const token = localStorage.getItem("refresh");

  const [adData, setAdData] = useState({
    title: adv?.title,
    description: adv?.description,
    price: adv?.price,
    images: adv?.images,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("inputChange");
    setAdData({
      ...adData,
      [name]: value,
    });
  };

  const handleImageChange = (newImages) => {
    setAdData({
      ...adData,
      images: newImages,
    });
  };

  const handleFileAdd = async (event) => {
    const files = Array.from(event.target.files);

    for (const file of files) {
      // Create a FormData object and append the file
      const formData = new FormData();
      formData.append("file", file); // 'image' is the field name expected by your API

      try {
        const response = await fetch(`${baseUrl}/ads/${adv.id}/image`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const uploadedImage = await response.json();
        console.log("uploadedImage", uploadedImage);
        setAdData((prevState) => ({
          ...prevState,
          images: [
            ...prevState.images,
            {
              url: uploadedImage?.images[uploadedImage?.images?.length - 1].url,
            },
          ],
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const updateAd = async () => {
    try {
      const response = await fetch(`${baseUrl}/ads/${adv.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(adData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedAd = await response.json();
      console.log("Ad updated:", updatedAd);
      // Redirect or perform other actions after update
    } catch (error) {
      console.error("Error updating ad:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAd();
  };

  const handleImgDelete = async (index) => {
    const imageToDelete = adData.images[index];

    if (imageToDelete.file) {
      const updatedImages = adData.images.filter((_, idx) => idx !== index);
      setAdData({ ...adData, images: updatedImages });
    } else {
      try {
        const response = await fetch(
          `${baseUrl}/ads/${adv.id}/image?file_url=${encodeURIComponent(
            imageToDelete.url
          )}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const updatedImages = adData.images.filter((_, idx) => idx !== index);
        setAdData({ ...adData, images: updatedImages });
      } catch (error) {
        console.error("Error deleting image:", error);
      }
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
                      onClick={() => handleImgDelete(index)}
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
            {adData?.images?.length === 5 && (
              <div className="form-newArt__bar-img">
                {adData?.images?.map((image, index) => (
                  <div className="form-newArt__img image-upload" key={index}>
                    <div
                      className="close"
                      onClick={() => handleImgDelete(index)}
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

          <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};
