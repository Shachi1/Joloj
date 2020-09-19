const router = require('express').Router()



const {
    createPostGetController,
    createPostPostController,
    // editPostGetController,
    // editPostPostController,
    // deletePostGetController,
    // postsGetController
} = require('../controllers/postController')

router.get('/create', createPostGetController)
router.post('/create',createPostPostController)

// router.get('/edit/:postId', isAuthenticated, editPostGetController)
// router.post('/edit/:postId', isAuthenticated, upload.single('post-thumbnail'), postValidator, editPostPostController)

// router.get('/delete/:postId', isAuthenticated, deletePostGetController)

// router.get('/', isAuthenticated, postsGetController)

module.exports = router