import { useState } from "react";
import {
  createAddWithNoImg,
  createAdvWithImg,
  addImagesToAdv,
  addAdvA,
} from "../../API/api";
import { useAddImagesToAdvMutation } from "../../services/ads";
import { UploadAdvPhotos } from "../uploadAdvPhotos/uploadAdvPhotos";
import "./addnewat.css";

export const AddNewAdv = ({ onAddAdvShow }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [addImagesToAdv] = useAddImagesToAdvMutation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = { title, description, price };
    // if (!selectedFiles.length) {
    //   createAddWithNoImg({ data });
    //   onAddAdvShow(false);
    // } else {
    // createAdvWithImg({ data, imgObj: data });
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    const imgs = [];
    selectedFiles.forEach((image, index) => {
      console.log(image.file);
      formData.append(`image${index + 1}`, image.file);
      imgs.push(image.file);
    });
    console.log(title, description, price);
    // addImagesToAdv({
    //   file: formData,
    //   // data: [{ title, description, price }],
    //   imgs: imgs,
    // });
    // addAdvA({ file: formData, imgs: imgs });
    await addImagesToAdv({ file: formData }).unwrap();
    onAddAdvShow(false);
    setSelectedFiles([]);
    // }
  };

  return (
    <div className="modal__content">
      <h3 className="modal__title">Новое объявление</h3>
      <div
        className="modal__btn-close"
        onClick={() => {
          onAddAdvShow(false);
          setSelectedFiles([]);
        }}
      >
        <div className="modal__btn-close-line"></div>
      </div>
      <form
        className="modal__form-newArt form-newArt"
        id="formNewArt"
        action="#"
        onSubmit={(e) => handleSubmit(e)}
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
          <UploadAdvPhotos
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
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

        <button
          className="form-newArt__btn-pub btn-hov02"
          id="btnPublish"
          type="submit"
        >
          Опубликовать
        </button>
      </form>
    </div>
  );
};
