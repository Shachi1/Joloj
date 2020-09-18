const router = require('express').Router()
const authRoutes = require('./authRoute')
const upload = require('../middleware/uploadMiddleware')
// const dashboardRoute = require('./dashboardRoute')
// const playgroundRoute = require('../playground/play')

// const routes = [
//     // {
//     //     path: '/auth',
//     //     handler: authRoutes
//     // },
//     // {
//     //     path: '/dashboard',
//     //     handler: dashboardRoute
//     // },
//     // {
//     //     path: '/playground',
//     //     handler: playgroundRoute
//     // },
//     {
//         path: '/',
//         handler: 
//     }
// ]




module.exports = app => {
    // routes.forEach(r => {
    //     if (r.path === '/') {
    //         app.get(r.path, r.handler)
    //     } else {
    //         app.use(r.path, r.handler)
    //     }
    // })
    app.get('/', (req, res) => {
        res.render('pages/index.ejs', { title: 'Home' })
    })
    app.use(authRoutes)
    app.get('/contact-us', (req, res) => {
        res.render('pages/contact-us.ejs', { title: 'Contact us' })
    })

    app.get('/dashboard', (req, res) => {
        res.render('pages/dashboard.ejs', { title: 'Data Dashboard' })
    })
    app.get('/fish-doctor', (req, res) => {
        res.render('pages/fish-doctor.ejs', { title: 'Fish Doctor' })
    })
    app.get('/knowledge-box', (req, res) => {
        res.render('pages/knowledge-box.ejs', { title: 'Knowledge Box' })
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