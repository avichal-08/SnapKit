import React, { useState } from 'react';
import axios from 'axios';
import Bolt from '../utils/loader';
import { FaGithub } from "react-icons/fa";

export default function Compress() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);
  const [value, setValue] = useState(50);
  const api_url=import.meta.env.VITE_API_URL

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    setUrl(false);
    if (!file) return alert("Please select a file");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(`${api_url}/api/v1/compress/upload?quality=${100 - value}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      setUrl(res.data.url);
    } catch (err) {
      setLoading(false);
      console.error("Upload failed:", err);
      alert("Error! Please try again");
    }
  };

  const handleDownload = async () => {
    try {
      const imageUrl = encodeURIComponent(url);
      const res = await axios.get(`${api_url}/api/v1/download?url=${imageUrl}`, {
      responseType: "blob"
      });

      const downloadUrl = window.URL.createObjectURL(res.data);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `compressed_image_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error(err);
      alert("Download failed");
    }
  };

  return (
    <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
      <div className='flex w-full justify-evenly'>
        <h1 className="text-2xl font-bold text-gray-800">Image Compressor</h1>
        <a href="https://github.com/avichal-08/SnapKit" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a>  
      </div>
      <p className="text-gray-500 text-center text-sm">
        Upload your image, choose compression level, and download it instantly.
      </p>

      <input 
        type="file" 
        onChange={handleFileChange} 
        className="bg-gray-100 border border-gray-300 w-full p-2 rounded-lg cursor-pointer text-sm"
      />

      <div className="w-full">
        <label className="block mb-1 font-medium text-gray-700">Compression Level</label>
        <div className="flex items-center gap-3">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={value} 
            step="2" 
            onChange={(e) => setValue(e.target.value)}  
            className="w-full accent-blue-500 cursor-pointer"
          />
          <div className="text-blue-600 font-semibold w-12 text-right">{value}%</div>
        </div>
      </div>

      <button 
        onClick={handleUpload} 
        className="bg-blue-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {loading && <div className="flex justify-center min-h-10"><Bolt /></div>}

      {url && (
        <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center shadow-inner">
          <img 
            src={url} 
            alt="compressed preview" 
            className="max-h-72 object-contain rounded-lg mb-4"
          />
          <button 
            onClick={handleDownload} 
            className="bg-green-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200 cursor-pointer"
          >
            Download Compressed Image
          </button>
        </div>
      )}

    </div>
  );
}
