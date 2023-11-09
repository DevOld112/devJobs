import express from 'express'
import { applyVacancy } from '../controllers/candidateControllers.js'
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadCv.js';

const router = express.Router()

router.post('/:id/apply', authMiddleware, upload.single('file') ,applyVacancy)

export default router;
