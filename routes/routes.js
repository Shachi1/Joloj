const router = require('express').Router()
const authRoutes = require('./authRoute')
const postRoute = require('./postRoute')
const dashboardRoutes = require('./dashboardRoute')
const adminRoutes = require('./adminRoute')
const upload = require('../middleware/uploadMiddleware')
const fishDocRoutes = require('./fishDocRoutes')
const messageRoutes = require('./messageRoute')
const Contact = require('../models/fishDoctor')

module.exports = app => {
    
    app.get('/', (req, res) => {
        res.render('pages/index.ejs', { title: 'Home' })
    })
    
    app.use(authRoutes)
    app.use(dashboardRoutes)
    app.use(adminRoutes)
    app.use(postRoute)
    app.use(messageRoutes)
    app.use('/doctors-list', fishDocRoutes)
    
    app.get('/contact-us', (req, res) => {
        res.render('pages/contact-us.ejs', { title: 'Contact us' })
    })
    // app.get('/dashboard', (req, res) => {
    //     res.render('pages/dashboard.ejs', { title: 'Data Dashboard' })
    // })
    app.get('/fish-doctor', (req, res) =>{
        Contact.find()
            .then(contacts => {
                res.render('pages/fish-doctor', {
                    title: 'fish doctors',
                    contacts,
                    error: {}
                })
            })
            .catch(e => {
                console.log(e)
                res.json({
                    message: 'hlw, Error Occurred'
                })
            })
        })

    app.get('/knowledge-box', (req, res) => {
        res.render('pages/knowledge-box.ejs', { title: 'Knowledge Box' })
    })

    app.get('/admin-panel', (req, res) => {
     
        res.render('pages/admin-panel.ejs', { title: 'Admin' })
    })

    app.get('/play', (req, res, next) => {
        res.render('playground/play', {
            title: 'Playground'
        })
    })
    
    app.post('/playPost', upload.single('my-file'), (req, res, next) => {

        if (req.file) {
            console.log(req.file)
        }

        res.redirect('/play')
    })
}