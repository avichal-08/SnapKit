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

      res.setHeader("Content-Type", "image/jpg"); 
      res.setHeader("Content-Disposition", `attachment; filename=compressed_image+${Date.now()}.jpg`);
      nodeStream.pipe(res);
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to download image");
    }
});

export default router;

