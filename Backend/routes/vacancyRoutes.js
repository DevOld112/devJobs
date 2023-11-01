import express from 'express'
import { addVacancy, showVacancy } from '../controllers/vacancyControllers.js'

const router = express.Router()

router.post('/vacancy', addVacancy)
router.get('/vacancy/:id', showVacancy)

export default router;