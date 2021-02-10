// Name, Email, Password and Profile

const { Schema, model } = require('mongoose')
//const Profile = require('./profile')

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'profile'
    }
}, {
    timestamps: true
})

const user = model('user', userSchema)
module.exports = user