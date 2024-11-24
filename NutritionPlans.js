import React, { useState } from "react";

const NutritionPlans = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setMessage(""); // Clear any previous messages
  };

  const handleFileUpload = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("File uploaded successfully: " + data.message);
      } else {
        throw new Error(data.message || "Failed to upload file.");
      }
    } catch (error) {
      setMessage("Error uploading file: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/download?filename=${filename}`
      );
      if (!response.ok) throw new Error("Network response was not ok.");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      setMessage("File downloaded successfully.");
    } catch (error) {
      setMessage("Error downloading file: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Nutrition Plans</h1>
      {message && <p>{message}</p>}
      <input type="file" onChange={handleFileChange} disabled={isLoading} />
      <button onClick={handleFileUpload} disabled={!file || isLoading}>
        Upload File
      </button>
      <input
        type="text"
        value={filename}
        onChange={(e) => setFilename(e.target.value)}
        placeholder="Enter file name to download"
        disabled={isLoading}
      />
      <button onClick={handleFileDownload} disabled={!filename || isLoading}>
        Download File
      </button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default NutritionPlans;
