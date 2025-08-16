import express from 'express';
const router=express.Router();

import downloadRouter from './download';
import compressRouter from './compress';

router.use('/download',downloadRouter)
router.use('/compress',compressRouter);

export default router;