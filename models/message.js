// Name, Email, Password and Profile

const { Schema, model } = require('mongoose')
//const Profile = require('./profile')

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    Replied: {
        type: Boolean
        
    }
}, {
    timestamps: true
})

const contact = model('contact', contactSchema)
module.exports = contact