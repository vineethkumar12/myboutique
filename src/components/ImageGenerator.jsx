import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
    setError(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setError(null);
    }
  };

  const generateImage = async () => {
    if (!prompt || !selectedImage) {
      setError("Please enter a prompt and upload an image.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("image", selectedImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/generate-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setGeneratedImage(response.data.output);
    } catch (err) {
      setError("Failed to generate image. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2>AI Blouse Design Generator</h2>
      <div style={{ marginBottom: "20px" }}>
        <label>Enter Design Prompt:</label>
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="E.g., 'Add golden embroidery to this design'"
          rows="4"
          cols="40"
          disabled={loading}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Upload Blouse Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          disabled={loading}
        />
      </div>
      <button
        onClick={generateImage}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#ccc" : "#28a745",
          color: "#fff",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Design"}
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {generatedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Generated Design:</h3>
          <img
            src={generatedImage}
            alt="Generated"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;
