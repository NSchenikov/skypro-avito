import React from "react";
import { useState } from "react";
import { baseUrl, refreshAccessToken } from "../../API/api";
import "./uploadPhoto.css";

export const UploadPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadClick = () => {
    let token = localStorage.getItem("user");
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch(`${baseUrl}/user/avatar`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("File uploaded successfully", data);
        })
        .catch((error) => {
          console.error("There was a problem with the file upload", error);
        });
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
