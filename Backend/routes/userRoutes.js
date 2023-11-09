import express from 'express'
import authMiddleware from '../middleware/authmiddleware.js'
import { getUserVacancy } from '../controllers/userControllers.js';

const router = express.Router()

router.route('/:user/vacancy')
    .get(authMiddleware, getUserVacancy)

export default router;