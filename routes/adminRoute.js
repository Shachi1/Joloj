const router = require('express').Router()
const { isAuthenticated } = require('../middleware/authMiddleware')

const {
    adminGetController
} = require('../controllers/adminController')

router.get('/admin-panel', isAuthenticated, adminGetController)

module.exports = router