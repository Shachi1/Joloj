const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const morgan = require('morgan')
// const mongoose=require('mongoose')
require('dotenv').config()

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
// app.use(bodyParser.json())

// const dbUser = 'dbUser'
// const pass = 'Yrm1sdrmp9GZMOLK'

// // const dbUser = process.env.DB_USER
// // const pass = process.env.DB_PASS
// const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/joloj?retryWrites=true&w=majority`;

// let Test = mongoose.model('Test', testSchema)
app.get('/contact-us', (req, res) => {
    res.render('pages/contact-us.ejs',{title:'Contact us'})
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
app.get('/login', (req, res) => {
    res.render('pages/login.ejs', { title: 'Log in' })
})
app.get('/', (req, res) => {
    res.render('pages/index.ejs',{title:'Home'})
    // res.json({
    //     message:"Hello"
    // })
    // let test = new Test({
    //     name:'Shourav'
    // })

    // test.save()
    //     .then(t => {
    //         res.json(t)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.status(500).json({
    //             error:"Error occured."
    //         })
    //     })
     
})



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
// mongoose
//     .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
//         })
//     })
//     .catch((e) => {
//         console.log(e)
//     })


