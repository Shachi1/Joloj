// user, title, bio, profilePics, links: {fb, twi, }, posts, bookmarks

const { Schema, model } = require('mongoose')

// const user = require('./user')
// const post = require('./post')

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    },
    title: {
        type: String,
        trim: true,
        maxlength: 100
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic: String,
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ],
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
}, {timestamps: true})

const profile = model('profile', profileSchema)

module.exports = profile