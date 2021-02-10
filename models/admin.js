// Name, Email, Password and Profile

const { Schema, model } = require('mongoose')
//const Profile = require('./profile')

const adminSchema = new Schema({
    adminName: {
        type: String,
        trim: true,
        maxlength: 15,
        required: true
    },
    
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const admin = model('admin', adminSchema)
module.exports = admin