const router = require('express').Router()
const {
    check,
    validationResult
} = require('express-validator')


router.get('/play', (req, res, next) => {
    res.render('playground/play', {
        title: 'Playground'
    })
})

router.post('/play',(req, res, next) => {
        res.render('playground/play')
})

module.exports = router