import express from 'express'
import { showJobs } from '../controllers/homeControllers.js'

const router = express.Router()

router.get('/', showJobs)

export default router