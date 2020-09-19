const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session =require('express-session')
const MongoDBStore =require('connect-mongodb-session')(session);
const mongoose=require('mongoose')
require('dotenv').config()

// import routes
const setRoutes = require('./routes/routes')





// import middleware
const { bindUserWithRequest } = require('./middleware/authMiddleware')
const setLocals = require('./middleware/setLocals')



const MONGODB_URI = 'mongodb://admin:pass123@ds343217.mlab.com:43217/exp-blog'
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
    expires: 1000 * 60 * 60 * 2
});

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


// middleware array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        secret: process.env.SECRET_KEY || 'SECRET_KEY',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    bindUserWithRequest(),
    setLocals()
]
app.use(middleware)
app.use(cors())



// app.use(authRoutes)

//app.use('/playground', validatorRoutes)
// app.use(bodyParser.json())

const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'

// // const dbUser = process.env.DB_USER
// // const pass = process.env.DB_PASS
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/joloj?retryWrites=true&w=majority`;


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


