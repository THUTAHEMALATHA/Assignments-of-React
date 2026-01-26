import express from 'express'
import * as controller from '../controllers/users.controller.js'
import { validateUser } from '../validations/users.validation.js'

const router = express.Router()

router.post('/', validateUser, controller.createUser)
router.get('/', controller.getUsers)
router.get('/:id', controller.getUser)
router.put('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

export default router
