

    const router = require('express').Router()
    const {
        getAllMessage,
        getSingleMessage,
        createMessage,
        updateMessage,
        deleteMessage,
    } = require('../controllers/fishDoctorController')
    
    
    router.get('/', getAllMessage)
    router.get('/:id', getSingleMessage)
    router.get('/delete/:id', deleteMessage)
    router.post('/', createMessage)
    router.put('/:id', updateMessage)
    
    module.exports = router


const router = require('express').Router()

const { messagePostController } = require('../controllers/messageController')


router.post('/contact-us', messagePostController)

module.exports = router