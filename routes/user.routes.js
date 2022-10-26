const { Router } = require('express')
const { getUser, saveUser, updateUser } = require('../controllers/user.controller')

const router = Router()

router.get('/', getUser)
router.post('/', saveUser)
router.put('/:id', updateUser)

module.exports = router
