import React from "react";
import { useState } from "react";
import { uploadAvatar } from "../../API/api";
import "./uploadPhoto.css";

export const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      uploadAvatar(formData);
    } else {
      console.error("No file selected");
    }
  };
  return (
    <>
      <input
        type="file"
        name="avatar"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      <div className="settings__change-photo" onClick={handleUploadClick}>
        Заменить
      </div>
    </>
  );
};
