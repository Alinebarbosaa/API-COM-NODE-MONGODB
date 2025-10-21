import { Router } from 'express'

import { getUsers, createUser, deleteUser } from './controllers/UserControllers.js'

const router = Router()

router.get('/users', getUsers)
router.post('/user', createUser)
router.delete('/users:id', deleteUser)

export default router