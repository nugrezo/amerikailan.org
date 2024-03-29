import React, { useState, useRef, useEffect } from "react";
import "./PhotoUpload.css";
import { Watermark } from "antd";
import uploadicon from "../../library/advicons/upload-icon.png";
import trash_icon from "../../library/advicons/trash_icon.png";

const PhotoUpload = () => {
  const [photos, setPhotos] = useState([]);
  const [photoError, setPhotoError] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Trigger file input only when the button is clicked
    if (fileInputRef.current && buttonClicked) {
      fileInputRef.current.click();
      setButtonClicked(false); // Reset the buttonClicked state after triggering click
    }
  }, [buttonClicked]);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];

    if (!selectedPhoto) {
      setPhotoError("Please select a photo.");
      return;
    }

    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
    if (selectedPhoto.size > maxFileSize) {
      setPhotoError("Maximum photo size is 5 MB.");
      return;
    }

    if (photos.length >= 5) {
      setPhotoError("You can upload a maximum of 5 photos.");
      return;
    }

    setPhotoError("");
    setPhotos([...photos, selectedPhoto]);

    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Set to null instead of an empty string
    }
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handleUpload = () => {
    // Programmatically click the file input
    setButtonClicked(true);
  };

  return (
    <div className="photo-upload_container">
      <p className="addphoto_header">
        Add photo{" "}
        <span className="upload-info">
          (Max 5 photo add is allowed.Each photo size max is 5mb)
        </span>
      </p>
      <div className="photo-upload">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          ref={fileInputRef}
          style={{ display: "none" }}
          key={photos.length} // Ensure re-render when photos change
        />
        {photoError && <p style={{ color: "red" }}>{photoError}</p>}
      </div>
      <div className="photo_container_wrapper">
        {photos.map((photo, index) => (
          <div key={index} className="photo_container">
            <p>{`Foto ${index + 1}`}</p>

            <div className="image_wrapper">
              <Watermark
                content={"amerikailan.org"}
                font={{ color: "white", fontSize: 20 }}
                offset={[-140, +15]}
              >
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`Foto ${index + 1}`}
                  className="photo_image"
                />
              </Watermark>
            </div>

            <div className="button_wrapper">
              <button onClick={() => handleDeletePhoto(index)}>
                <span className="trash_icon">
                  <img
                    src={trash_icon}
                    alt="trash_icon"
                    style={{ width: 20, height: 20 }}
                  ></img>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* "Upload Photos" button to trigger file input */}
      <div className="upload_button_container">
        <button className="upload_button" onClick={handleUpload}>
          <span className="uploadbutton_name">Save Photo</span>
          <img
            src={uploadicon}
            alt="upload_icon"
            style={{ width: 30, height: 30 }}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default PhotoUpload;
