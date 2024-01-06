import { useEffect } from "react";
import "./uploadAdvPhotos.css";

export const UploadAdvPhotos = ({ selectedFiles, setSelectedFiles }) => {
  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (selectedFiles.length + files.length <= 5) {
      const newImages = files.map((file) => ({
        id: Date.now(),
        url: URL.createObjectURL(file),
      }));

      setSelectedFiles([...selectedFiles, ...newImages]);
    } else {
      alert("Максимальное количество изображений - 5");
    }
  };

  return (
    <>
      {selectedFiles.length < 5 && (
        <div className="form-newArt__bar-img">
          {selectedFiles.map((image, index) => (
            <div className="form-newArt__img image-upload" key={index}>
              <label htmlFor="file-input">
                <div className="form-newArt__img-cover"></div>
              </label>
              <img src={image.url} alt="" />
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
              onChange={handleFileChange}
              multiple
            />
            <img src="" alt="" />
          </div>
        </div>
      )}
      {selectedFiles.length === 5 && (
        <div className="form-newArt__bar-img">
          {selectedFiles.map((image, index) => (
            <div className="form-newArt__img image-upload" key={index}>
              <label htmlFor="file-input">
                <div className="form-newArt__img-cover"></div>
              </label>
              <img src={image.url} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
