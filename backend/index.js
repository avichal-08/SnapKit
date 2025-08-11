import express from 'express';
import cors from 'cors';
import upload from './config/multer.js';
import cloudinary from './config/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.post('/upload',upload.single('image'),async(req,res)=>{
    try{
        const localpath=req.file.path;
        const result=await cloudinary.uploader.upload(localpath,{
            folder:'test_uploads',
            quality:60,
            fetch_format: "jpg"
        });

        res.json({
           success:true,
           url:result.secure_url,
           public_id:result.public_id
        });
    }catch(error){
        console.error(error);
        res.json({ success: false, message: 'Upload failed' });
    }
});

app.get('/download',async(req,res)=>{
    const {url}=req.query;
    const fileUrl = `${url}`;
    console.log(fileUrl)
    try{
    const response = await axios.get(fileUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    res.setHeader("Content-Disposition", 'attachment; filename="compressed.jpg"');
    res.setHeader("Content-Type", "image/jpeg");
    res.send(buffer);
  } catch (err) {
    res.status(500).send("Error downloading file");
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
