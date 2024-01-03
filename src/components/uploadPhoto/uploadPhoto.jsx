import React from "react";
import { useState } from "react";
import { uploadAvatar } from "../../API/api";
import "./uploadPhoto.css";

export const UploadPhoto = ({ setCurrentUserData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [sample, setSample] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      setSample(uploadAvatar(selectedFile));
      setCurrentUserData(sample);
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
