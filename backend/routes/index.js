import express from 'express';
const router=express.Router();

import downloadRouter from './download.js';
import compressRouter from './compress.js';
import bgremoveRouter from './backgroundRemove.js';
import formatchangeRouter from './formatChange.js';
import objectremoveRouter from './objectRemove.js';

router.use('/download',downloadRouter)
router.use('/compress',compressRouter);
router.use('/bgremove',bgremoveRouter);
router.use('/formatchange',formatchangeRouter);
router.use('/objectremove',objectremoveRouter);

export default router;