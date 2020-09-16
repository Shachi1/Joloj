// title, body, author, tags, thumbnail, readTime, likes, dislikes, comments

const { Schema, model } = require('mongoose')

const user = require('./user')
const comment = require('./comment')

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: user,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    thumbnail: String,
    readTime: String,
    likes: [{
        type: Schema.Types.ObjectId,
        ref: user
    }],
    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: user
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: comment
        }
    ]
}, { timestamps: true })

const post = model('post', postSchema)

module.exports = post