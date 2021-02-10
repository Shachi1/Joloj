const router = require('express').Router()

const postValidator = require('../validator/postValidator')
const { isAuthenticated } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')

const {
    createPostGetController,
    createPostPostController,
    editPostGetController,
    editPostPostController,
    deletePostGetController,
    postsGetController,
    showPostsController,
    singlePostGetController
} = require('../controllers/postConroller')

router.get('/create', isAuthenticated, createPostGetController)
router.post('/create', isAuthenticated, postValidator, createPostPostController)

router.get('/edit/:postId', isAuthenticated, editPostGetController)
router.post('/edit/:postId', isAuthenticated, postValidator, editPostPostController)

router.get('/delete/:postId', isAuthenticated, deletePostGetController)
router.get('/blogs/:postId',  singlePostGetController)
router.get('/', isAuthenticated, postsGetController)
router.get('/blogs',showPostsController)

module.exports = router