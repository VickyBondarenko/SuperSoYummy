import React, { ChangeEvent, useState } from "react";
import { ReactComponent as Camera } from "../../../assets/imageCapture.svg";
import styles from "./UploadImage.module.css";

interface UploadImageProps {
  onImageSelected: (file: File | null) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onImageSelected }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
    onImageSelected(file);
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
    </div>
  );
};

export default UploadImage;
