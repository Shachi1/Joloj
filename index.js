const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const app = express()

app.set('view engine', 'ejs')
app.use(cors())
app.use(bodyParser.json())


// const dbUser = 'dbUser'
// const pass = 'Yrm1sdrmp9GZMOLK'

const dbUser = process.env.DB_USER
const pass = process.env.DB_PASS
const uri = `mongodb+srv://${dbUser}:${pass}@cluster0.evhow.mongodb.net/joloj?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/get', (req, res) => {
    client.connect(err => {
        const collection = client.db("joloj").collection("dashboard");
        collection.find().toArray((err, documents) => {
            if (err) {
                console.log(err)
                res.status(500).send({ message: err })
            }
            else {
                res.send(documents)
            }
        })
        //client.close()
    })
})

app.post('/post', (req, res) => {
    // console.log(req.body)
    //ekhane db te pathano hobe. then db theke id sohokare data ta ekhane send kora hobe
    const product = req.body
    //console.log(product)
    client.connect(err => {
        const collection = client.db("joloj").collection("dashboard");
        collection.insertOne({ product }, (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send({ message: err })
            }
            else {
                res.send(result.ops[0])
            }


        })
    })
    // client.close();
});



app.get('/about', (req, res) => {
    res.render('pages/about')
})
app.get('/help', (req, res) => {
    res.render('pages/help')
})
app.get('/', (req, res) => {
    let post = {
        title: 'Test title',
        body: 'Test body',
        published: false
    }

    let posts = [
        { title: 'title one', author: 'Shourav' },
        { title: 'title two', author: 'Shourav' },
        { title: 'title three', author: 'Shourav' },
        { title: 'title four', author: 'Shourav' }
    ]

    res.render('pages/index', { title: 'EJs is cool!', post, posts })
})

const PORT = process.env.PORT || 4200
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})
