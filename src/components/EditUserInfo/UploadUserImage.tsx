import React, { ChangeEvent, useState } from "react";
import styles from "./UploadUserImage.module.css";
import { ReactComponent as UserSvg } from "/src/images/svg/authForm/name.svg";
import { ReactComponent as Plus } from "/src/images/svg/plus.svg";

interface UploadImageProps {
  image?: string;
  onImageSelected: (file: File | null) => void;
}

export const UploadUserImage: React.FC<UploadImageProps> = ({
  image,
  onImageSelected,
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(
    image ? image : null
  );
  const [imageWarning, setImageWarning] = useState<string | null>("");

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
        previewImage ? "bg-transparent" : "bg-accentGray"
      }`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full h-full opacity-0 cursor-pointer"
      />
      <UserSvg className={`${styles.image_svg} ${previewImage && "hidden"}`} />
      <Plus className={`${styles.image_plus_svg}`} />

      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          className={styles.image_preview}
        />
      )}

      {!previewImage && (
        <p className={`${styles.image_warning} }`}>{imageWarning}</p>
      )}
    </div>
  );
};
