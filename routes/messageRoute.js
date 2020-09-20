
    // const router = require('express').Router()
    // const {
    //     createMessage
    // } = require('../controllers/messageController')
    
    // router.post('/contact-us', createMessage)
    
    // module.exports = router






const router = require('express').Router()

const { messagePostController } = require('../controllers/messageController')


router.post('/contact-us', messagePostController)

module.exports = router