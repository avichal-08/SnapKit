import express from 'express';
import cors from 'cors';
import upload from './config/multer.js';
import cloudinary from './config/cloudinary.js';
import streamifier from "streamifier";
const app = express();
app.use(cors());

app.get('/test',(req,res)=>{
    res.send("Active")
})

app.post('/upload',upload.single('image'),async(req,res)=>{
    if (!req.file) 
        return res.status(400).send("No file uploaded");

    const {quality}=req.query;
    const stream=cloudinary.uploader.upload_stream({
        folder:'test_uploads',
        quality,
        fetch_format: "jpg"
    },(error,result)=>{
        if(error)
            return res.status(500).send(error);
        res.json({
        success:true,
        url:result.secure_url,
        public_id:result.public_id
    })
        }
    );

    streamifier.createReadStream(req.file.buffer).pipe(stream);
});

app.get("/download", async (req, res) => {
  try {
      const imageUrl = decodeURIComponent(req.query.url);
      if (!imageUrl) return res.status(400).send("No URL provided");

      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Failed to fetch image");

      res.setHeader("Content-Type", "image/jpg"); 
      res.setHeader("Content-Disposition", `attachment; filename=compressed_image+${Date.now()}.jpg`);
      response.body.pipe(res);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to download image");
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
