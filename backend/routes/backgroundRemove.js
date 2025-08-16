import express from 'express';
import upload from '../config/multer.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from "streamifier";
const router = express.Router();

router.post('/upload',upload.single('image'),async(req,res)=>{
    if (!req.file) 
        return res.status(400).send("No file uploaded");
    const {bg}=req.query;

    const transformation=[
        { effect: "background_removal"}
    ];
    if(!(bg==="none")){
        transformation.push({ background: `${bg}` });
    };

    const stream=cloudinary.uploader.upload_stream({
        folder:'SnapKit_uploads',
        transformation,
        format: "png",
        fetch_format: "png"
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

export default router;