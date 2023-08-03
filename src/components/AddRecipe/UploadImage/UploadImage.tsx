import React, { ChangeEvent, useState } from "react";

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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {previewImage && (
        <img src={previewImage} alt="Preview" style={{ maxWidth: "300px" }} />
      )}
    </div>
  );
};

export default UploadImage;
