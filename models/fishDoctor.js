const { Schema, model } = require('mongoose')

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    bio: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 1000
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 9,
        maxlength: 15
    },
    workZone: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    }
})

const doctorModel = model('Contact', doctorSchema)

module.exports = doctorModel