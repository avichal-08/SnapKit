import express from 'express';
import { Readable } from "stream";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
      const imageUrl = decodeURIComponent(req.query.url);
      if (!imageUrl) return res.status(400).send("No URL provided");

      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Failed to fetch image");
      const nodeStream = Readable.fromWeb(response.body);
      const contentType = response.headers.get('content-type');
      let ext = '';
       if (contentType === 'image/jpeg') ext = '.jpg';
       else if (contentType === 'image/png') ext = '.png';
       else if (contentType === 'image/webp') ext = '.webp';
       else if (contentType === 'image/gif') ext = '.gif';
       else ext = 'png';

      res.setHeader("Content-Type", `${contentType}`); 
      res.setHeader("Content-Disposition", `attachment; filename=compressed_image+${Date.now()}.${ext}`);
      nodeStream.pipe(res);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to download image");
    }
});

export default router;

