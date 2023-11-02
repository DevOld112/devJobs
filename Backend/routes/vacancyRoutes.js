import express from 'express'
import { addVacancy, showVacancy, updateVacancy } from '../controllers/vacancyControllers.js'

const router = express.Router()

router.post('/vacancy', addVacancy)

router.get('/vacancy/:id', showVacancy)
router.post('/vacancy/:id/edit', updateVacancy)

export default router;