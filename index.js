const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose=require('mongoose')
require('dotenv').config()


const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(bodyParser.json())


const dbUser = 'dbUser'
const pass = 'Yrm1sdrmp9GZMOLK'

// const dbUser = process.env.DB_USER
// const pass = process.env.DB_PASS
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/joloj?retryWrites=true&w=majority`;

let Schema = mongoose.Schema
let testSchema = new Schema({
    name: String
})

let Test = mongoose.model('Test', testSchema)

app.get('/', (req, res) => {
    res.json({
        message:"Hello"
    })
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
    //  res.render('pages/index')
})



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


