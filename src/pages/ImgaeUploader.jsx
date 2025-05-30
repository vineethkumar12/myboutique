import { useCallback, useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function ImageUploader({ onUpload, label = "Upload Image" }) {
  const [preview, setPreview] = useState(null);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(reader.result);
          onUpload(file);
        };
        reader.readAsDataURL(file);
      }
    },
    [onUpload]
  );

  return (
    <div
      className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {preview ? (
        <img src={preview} alt="Preview" className="max-h-64 mx-auto" />
      ) : (
        <div>
          <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">{label}</p>
          <p className="text-xs text-gray-500">
            Drag & drop or click to select
          </p>
        </div>
      )}
    </div>
  );
}
