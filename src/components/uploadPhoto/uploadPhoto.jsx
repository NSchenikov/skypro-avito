import React from "react";
import { useState } from "react";
import { uploadAvatar } from "../../API/api";
import "./uploadPhoto.css";

export const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    // console.log("selected", file);
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      //   console.log("formdata in Click", selectedFile);
      uploadAvatar(selectedFile);
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
        onChange={(e) => {
          e.preventDefault();
          const file = e.target.files?.[0];
          if (file) {
            handleFileChange(file);
          }
        }}
      />
      <div className="settings__change-photo" onClick={handleUploadClick}>
        Заменить
      </div>
    </>
  );
};
