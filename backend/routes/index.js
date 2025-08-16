import express from 'express';
const router=express.Router();

import downloadRouter from './download.js';
import compressRouter from './compress.js';

router.use('/download',downloadRouter)
router.use('/compress',compressRouter);

export default router;