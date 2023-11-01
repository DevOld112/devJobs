import express from 'express'
import { addVacancy } from '../controllers/vacancyControllers.js'

const router = express.Router()

router.post('/vacancy', addVacancy)

export default router;