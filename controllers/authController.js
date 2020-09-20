// const bcrypt = require('bcrypt')

// const User = require('../models/user')

// exports.signupGetController = (req, res, next) => {
//     res.render('pages/signup', {title: 'Create A New Account'})
// }

// exports.signupPostController =  async (req, res, next) => {
//     // console.log(req.body)
//     // res.render('pages/signup', {title: 'Create A New Account'})
//     let { username, email, password } = req.body

//     try {
//         let hashedPassword = await bcrypt.hash(password, 11)

//         let user = new User({
//             username,
//             email,
//             password: hashedPassword
//         })

//         let createdUser = await user.save()
//         console.log('User Created Successfully', createdUser)
//         res.render('pages/signup', {title: 'Create A New Account'})
//     } catch (e) {
//         console.log(e)
//         next(e)
//     }
// }

// exports.loginGetController = (req, res, next) => {
//     res.render('pages/login', {title: 'Login to Your Account'})
// }

// exports.loginPostController =  async (req, res, next) => {
//     let { email, password } = req.body

//     try {
//         let user = await User.findOne({ email })
//         if (!user) {
//             return res.json({
//                 message: 'Invalid email'
//             })
//         }

//         let match = await bcrypt.compare(password, user.password)
//         if (!match) {
//             return res.json({
//                 message: 'Invalid pass'
//             })
//         }

//         console.log('Successfully Logged In', user)
//         res.render('pages/login', {title: 'Login to Your Account'})

//     } catch (e) {
//         console.log(e)
//         next(e)
//     }
// }

// exports.logoutController = (req, res, next) => {

// }

const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')

const User = require('../models/user')
const errorFormatter = require('../utils/validationErrorFormatter')

exports.signupGetController = (req, res, next) => {
    res.render('pages/signup', { title: 'Create A New Account', error: {}, value: {} })
}

exports.signupPostController = async (req, res, next) => {

    let { username, email, password } = req.body

    let errors = validationResult(req).formatWith(errorFormatter)
    if (!errors.isEmpty()) {
        return res.render('pages/signup',
            {
                title: 'Create A New Account',
                error: errors.mapped(),
                value: {
                    username, email, password
                }
            })
    }

    try {
        let hashedPassword = await bcrypt.hash(password, 11)

        let user = new User({
            username,
            email,
            password: hashedPassword
        })

        let createdUser = await user.save()
        console.log('User Created Successfully', createdUser)
        // res.render('pages/signup', {title: 'Create A New Account'})
        req.session.isLoggedIn = true
        req.session.user = user
        req.session.save(err => {
            if (err) {
                console.log(err)
                return next(err)
            }
            res.redirect('/')
        })

    } catch (e) {
        console.log(e)
        // return next(err)
    }
    //res.redirect('/')
}

exports.loginGetController = (req, res, next) => {
    //46
    console.log(req.session.isLoggedIn, req.session.user)
    res.render('pages/login', { title: 'Login to Your Account', error: {} })
}

exports.loginPostController = async (req, res, next) => {
    let { email, password } = req.body

    let errors = validationResult(req).formatWith(errorFormatter)
    if (!errors.isEmpty()) {
        return res.render('pages/login',
            {
                title: 'Login to Your Account',
                error: errors.mapped()
            })
    }

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.json({
                message: 'Invalid Credential'
            })
        }

        let match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.json({
                message: 'Invalid Credential'
            })
        }

        req.session.isLoggedIn = true
        req.session.user = user
        req.session.save(err => {
            if (err) {
                console.log(err)
                return next(err)
            }
            if (email == 'admin@gmail.com' && password == 'admin123') {
                res.redirect('/admin-panel')
            }
            else{res.redirect('/')}
        })
        // res.render('pages/login', { title: 'Login to Your Account', error: {}})

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.logoutController = (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
            return next(err)
        }
        return res.redirect('/login')
    })
}



