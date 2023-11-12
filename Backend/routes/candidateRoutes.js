import express from 'express'
import { applyVacancy, downloadCV } from '../controllers/candidateControllers.js'
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadCv.js';

const router = express.Router()

router.post('/:id/apply', authMiddleware, upload.single('cv') ,applyVacancy)
router.get('/download/:id', authMiddleware, downloadCV)

export default router;
