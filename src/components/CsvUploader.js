import React, { useState } from "react";
import Papa from "papaparse";
import axios from "axios";

export function CsvUploader() {
  const [data, setData] = useState([]);
  const [uploadedData, setUploadedData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true, // Get columns as key-value pairs
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  const handleDataUpload = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/upload-csv", { data });
      setUploadedData(response.data); // Save uploaded data to display
      alert("Data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading data:", error);
      alert("There was an error uploading the data.");
    }
  };

  return (
    <div className="container">
      <h1>CSV Uploader</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={handleDataUpload} disabled={!data.length}>
        Upload CSV Data
      </button>

      <h2>Uploaded Data:</h2>
      <table border="1">
        <thead>
          <tr>
            {uploadedData.length > 0 &&
              Object.keys(uploadedData[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {uploadedData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CsvUploader;