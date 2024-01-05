import { useEffect } from "react";
import "./uploadAdvPhotos.css";

export const UploadAdvPhotos = ({ selectedFiles, handleFileChange }) => {
  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <>
      {selectedFiles.lenght ? (
        selectedFiles.map(
          (photo, index) => {
            return (
              <div className="form-newArt__bar-img" key={index}>
                <div className="form-newArt__img image-upload">
                  <label htmlFor="file-input">
                    <div className="form-newArt__img-cover"></div>
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      e.preventDefault();
                      const file = e.target.files?.[index];
                      if (file) {
                        handleFileChange(file);
                      }
                    }}
                  />
                  <img src={photo.name} alt="" />
                </div>
              </div>
            );
          },
          <div className="form-newArt__bar-img">
            <div className="form-newArt__img image-upload">
              <label htmlFor="file-input">
                <div className="form-newArt__img-cover"></div>
              </label>
              <input
                id="file-input"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  e.preventDefault();
                  const file = e.target.files?.[selectedFiles.lenght + 1];
                  if (file) {
                    handleFileChange(file);
                  }
                }}
              />
              <img src="" alt="" />
            </div>
          </div>
        )
      ) : (
        <div className="form-newArt__bar-img">
          <div className="form-newArt__img image-upload">
            <label htmlFor="file-input">
              <div className="form-newArt__img-cover"></div>
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                e.preventDefault();
                const file = e.target.files?.[0];
                if (file) {
                  handleFileChange(file);
                }
              }}
            />
            <img src="" alt="" />
          </div>
        </div>
      )}
      {/* <div className="form-newArt__bar-img">
        <div className="form-newArt__img image-upload">
          <label htmlFor="file-input">
            <div className="form-newArt__img-cover"></div>
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              e.preventDefault();
              const file = e.target.files?.[0];
              if (file) {
                handleFileChange(file);
              }
            }}
          />
          <img src="" alt="" />
        </div>
      </div> */}
    </>
  );
};
