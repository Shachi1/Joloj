// Name, Email, Password and Profile

const { Schema, model } = require('mongoose')
const Profile = require('./Profile')

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 30,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: profile
    }
}, {
    timestamps: true
})

const user = model('user', userSchema)
module.exports = user