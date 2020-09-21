const { validationResult } = require('express-validator')
// y

//const Flash = require('../utils/Flash')
const errorFormatter = require('../utils/validationErrorFormatter')

const Post = require('../models/Post')
// const Profile = require('../models/Profile')

exports.createPostGetController = (req, res, next) => {
    res.render('pages/adminPanel/createPost', {
        title: 'Create A New Post',
        error: {},
        //flashMessage: Flash.getMessage(req),
        value: {}
    })
}

exports.createPostPostController = async (req, res, next) => {
    let { title, body, tags } = req.body
    console.log(req.body)
    let errors = validationResult(req).formatWith(errorFormatter)

    if (!errors.isEmpty()) {
        res.render('pages/adminPanel/createPost', {
            title: 'Create A New Post',
            error: errors.mapped(),
            //flashMessage: Flash.getMessage(req),
            value: {
                title,
                body,
                tags
            }
        })
    }

    if (tags) {
        tags = tags.split(',')
        tags = tags.map(t => t.trim())
    }

    // let readTime = readingTime(body).text

    let post = new Post({
        title,
        body,
        tags,
        author: req.user._id,
        likes: [],
        dislikes: [],
        comments: []
    })

    

    try {
        let createdPost = await post.save()
        //req.flash('success', 'Post Created Successfully')
        return res.redirect(`/posts`)
    } catch (e) {
        next(e)
    }

}

exports.editPostGetController = async (req, res, next) => {
    let postId = req.params.postId

    try {
        let post = await Post.findOne({ _id: postId })

        if (!post) {
            let error = new Error('404 Page Not Found')
            error.status = 404
            throw error
        }

        res.render('pages/adminPanel/editPost', {
            title: "Edit Your Post",
            error: {},
            //flashMessage: Flash.getMessage(req),
            post
        })
    } catch (e) {
        next(e)
    }
}

exports.editPostPostController = async (req, res, next) => {
    let { title, body, tags } = req.body
    let postId = req.params.postId
    let errors = validationResult(req).formatWith(errorFormatter)

    try {
        let post = await Post.findOne({  _id: postId })

        if (!post) {
            let error = new Error('404 Page Not Found')
            error.status = 404
            throw error
        }

        if (!errors.isEmpty()) {
            res.render('pages/adminPanel/createPost', {
                title: 'Create A New Post',
                error: errors.mapped(),
                //flashMessage: Flash.getMessage(req),
                post
            })
        }

        await Post.findOneAndUpdate(
            { _id: post._id },
            { $set: { title, body, tags } },
            { new: true }
        )
        res.redirect('/posts')

    } catch (e) {
        next(e)
    }
}

exports.deletePostGetController = async (req, res, next) => {
    let { postId } = req.params

    try {
        let post = await Post.findOne({  _id: postId })
        if (!post) {
            let error = new Error('404 Page Not Found')
            error.status = 404
            throw error
        }

        await Post.findOneAndDelete({ _id: postId })
        
        //req.flash('success', 'Post Delete Successfully')
        res.redirect('/posts')

    } catch (e) {
        next(e)
    }
}


exports.postsGetController = async (req, res, next) => {
    try {
        let posts = await Post.find()
        res.render('pages/adminPanel/posts', {
            title: 'My Created Posts',
            posts,
            //flashMessage: Flash.getMessage(req)
        })
    } catch (e) {
        next(e)
    }
}

exports.singlePostGetController = async (req, res, next) => {
    let { postId } = req.params
    console.log(postId)
    try {
        let post = await Post.findById(postId)    
        if (!post) {
            let error = new Error('404 Page Not Found')
            error.status = 404
            throw error
        }
        res.render('pages/singlePost.ejs', {
            title: 'Blog',
            post,
            error: {},
        })

    } catch (e) {
        next(e)
    }
}

exports.showPostsController = async (req, res, next) => {
    try {
        let posts = await Post.find()
        res.render('pages/know.ejs', {
            title: 'My Created Posts',
            posts
        })
    } catch (e) {
        next(e)
    }
}