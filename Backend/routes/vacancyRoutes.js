import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { addVacancy, showVacancy, updateVacancy,deleteVacancy } from '../controllers/vacancyControllers.js'

const router = express.Router()

router.post('/vacancy', authMiddleware ,addVacancy)

router.get('/vacancy/:id', showVacancy)
router.post('/vacancy/:id/edit', updateVacancy)
router.delete('/vacancy/:id/delete', authMiddleware ,deleteVacancy)

export default router;