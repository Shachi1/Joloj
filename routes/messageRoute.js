
const router = require('express').Router()

const { messagePostController } = require('../controllers/messageController')


router.post('/contact-us', messagePostController)

module.exports = router