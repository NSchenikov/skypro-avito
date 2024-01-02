import React from "react";
import { useState } from "react";
import { uploadAvatar } from "../../API/api";
import "./uploadPhoto.css";

export const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    // setSelectedFile(event.target.files[0]);
    // setSelectedFile(file);
    console.log("selected", file);
    const formData = new FormData();
    // formData.append("myFile", file);

    setSelectedFile(file);
    formData.append("file", file);
    for (let [key, value] of formData.entries()) {
      console.log(key);
      console.log(value);
      //   setSelectedFile(key);
    }
    setSelectedFile(formData);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      console.log("formdata in Click", selectedFile);
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
          // handleFileChange
        }}
      />
      <div className="settings__change-photo" onClick={handleUploadClick}>
        Заменить
      </div>
    </>
  );
};
