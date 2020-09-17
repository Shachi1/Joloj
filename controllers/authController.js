const bcrypt = require('bcrypt')

const User = require('../models/user')

exports.signupGetController = (req, res, next) => {
    res.render('pages/signup', {title: 'Create A New Account'})
}

exports.signupPostController =  async (req, res, next) => {
    // console.log(req.body)
    // res.render('pages/signup', {title: 'Create A New Account'})
    let { username, email, password } = req.body

    try {
        let hashedPassword = await bcrypt.hash(password, 11)

        let user = new User({
            username,
            email,
            password: hashedPassword
        })

        let createdUser = await user.save()
        console.log('User Created Successfully', createdUser)
        res.render('pages/signup', {title: 'Create A New Account'})
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.loginGetController = (req, res, next) => {
    res.render('pages/login', {title: 'Login to Your Account'})
}

exports.loginPostController =  async (req, res, next) => {
    let { email, password } = req.body
    
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.json({
                message: 'Invalid email'
            })
        }

        let match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.json({
                message: 'Invalid pass'
            })
        }

        console.log('Successfully Logged In', user)
        res.render('pages/login', {title: 'Login to Your Account'})

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.logoutController = (req, res, next) => {

}

