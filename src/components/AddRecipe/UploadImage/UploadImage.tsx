import React, { ChangeEvent, useState } from "react";
import { ReactComponent as Camera } from "../../../assets/imageCapture.svg";
import styles from "./UploadImage.module.css";

interface UploadImageProps {
  onImageSelected: (file: File | null) => void;
}

const defaultMessage =
  "If you don't upload image, there will be default placeholder instead";

const UploadImage: React.FC<UploadImageProps> = ({ onImageSelected }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageWarning, setImageWarning] = useState<string | null>(
    defaultMessage
  );

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0] || null;
    if (file) {
      const validExtensions = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];
      const validSize = 5 * 1024 * 1024;

      if (validExtensions.includes(file.type) && file.size <= validSize) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(file);
        onImageSelected(file);
      } else {
        setImageWarning(
          "Invalid file format or size. Please select a valid image file (PNG, JPEG, JPG, WEBP) up to 5MB."
        );
      }
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div
      className={`${styles.image_placeholder} ${
        previewImage ? "bg-transparent" : "bg-accentMain"
      }`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full h-full opacity-0 cursor-pointer"
      />
      <Camera className={styles.image_svg} />

      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className={styles.image_preview}
        />
      )}

      {!previewImage && (
        <p
          className={`${styles.image_warning} ${
            imageWarning !== defaultMessage && "text-red-700"
          }`}
        >
          {imageWarning}
        </p>
      )}
    </div>
  );
};

export default UploadImage;
