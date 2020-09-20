// Name, Email, Password and Profile

const { Schema, model } = require('mongoose')
//const Profile = require('./profile')

const messageSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 15,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
    // Replied: {
    //     type: Boolean
        
    // }
})

const message = model('message', messageSchema)
module.exports = message