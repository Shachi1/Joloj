const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose=require('mongoose')
require('dotenv').config()

// import routes
// const routes = require('./routes/routes')
// const authRoutes = require('./routes/authRoute')
// import playgrounde
//const validatorRoutes = require('./playground/validator')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


// middleware array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
]
app.use(middleware)
app.use(cors())
// app.use(routes)
const setRoutes = require('./routes/routes')

//app.use('/playground', validatorRoutes)
// app.use(bodyParser.json())

const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'

// // const dbUser = process.env.DB_USER
// // const pass = process.env.DB_PASS
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/joloj?retryWrites=true&w=majority`;


// app.get('/login', (req, res) => {
//     res.render('pages/login.ejs', { title: 'Log in' })
// })
// app.get('/signup', (req, res) => {
//     res.render('pages/signup.ejs', { title: 'Sign up' })
// })
// app.get('/', (req, res) => {
//     res.render('pages/index.ejs', { title: 'Home' })
// })
setRoutes(app)
const PORT = process.env.PORT || 8080

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
        })
    })
    .catch((e) => {
        console.log(e)
    })


