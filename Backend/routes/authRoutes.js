import express from 'express'
import { register, login, user } from '../controllers/authControllers.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

//Area Privada - Requiere JWT

router.get('/user', authMiddleware, user)

export default router;
