import express from 'express';
const router=express.Router();

import downloadRouter from './download.js';
import compressRouter from './compress.js';
import bgremoveRouter from './backgroundRemove.js'

router.use('/download',downloadRouter)
router.use('/compress',compressRouter);
router.use('/bgremove',bgremoveRouter);

export default router;