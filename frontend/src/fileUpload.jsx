import React, { useState } from 'react';
import axios from 'axios';
import Bolt from './loader'
function FileUpload() {
  const [file, setFile] = useState(null);
  const [loading,setLoading]=useState(false);
  const [url,setUrl]=useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload success:", res.data);
      setLoading(false);
      setUrl(res.data.url);
    } catch (err) {
      setLoading(false)
      console.error("Upload failed:", err);
      alert("error! please try again");
    }
  };

  const handleDownload=()=>{
    const link=document.createElement("a");
    link.href=`http://localhost:3000/download?url=${url}`;
    link.download="compressed.jpg";
    link.click();
  };

  return (
    <div className='bg-white w-100 h-100 rounded-xl pl-2 pt-4'>
      <input type="file" onChange={handleFileChange} className='bg-gray-300 w-60 mr-15 pl-2 rounded cursor-pointer'/>
      <button onClick={handleUpload} className='bg-blue-300 w-20 rounded hover:bg-blue-800 hover:text-white cursor-pointer'>Upload</button>
      {loading ? <Bolt/>: null}
      {/* {url?<img src={`${url}`}/>:null} */}
      {url ? <button onClick={handleDownload} className='bg-blue-300 w-20 rounded hover:bg-blue-800 hover:text-white cursor-pointer pt-5'>Download Image</button>: null}
    </div>
  );
}

export default FileUpload;